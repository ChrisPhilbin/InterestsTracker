import React, { useEffect, useState } from 'react'
import 'date-fns'
import DateFnsUtils from '@date-io/date-fns'
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers'
import { useDispatch } from 'react-redux'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Input from '@material-ui/core/Input'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { fetchPostNewEmployee } from '../../actions/EmployeeActions'

const CreateEmployee = (props) => {

    let [name, setName]                 = useState('')
    let [headshot, setHeadshot]         = useState(null)
    let [selectedDate, setSelectedDate] = React.useState(new Date());

    const dispatch = useDispatch()

    const handleCreateNewEmployee = () => {
        let employee = {
            name: name,
            headshot: headshot,
            hire_date: selectedDate
        }
        dispatch(fetchPostNewEmployee(employee))
        props.history.push('/employees')
    }

    return(
        <Grid style={{ padding: 40 }}>
            <Typography variant="h4" gutterBottom>Add a new employee</Typography>

            <Grid item>
                <TextField
                    required
                    id="fullname"
                    label="Full name"
                    defaultValue="Michael Smith"
                    variant="outlined"
                    onChange={(e) => setName(e.target.value)}
                />
            </Grid>

            <Grid item>
                <Input accept="*" id="upload-button" style={{display: 'none'}} onChange={(e) => setHeadshot(e.target.files[0])} type="file" />

                <label htmlFor="upload-button">
                    <Button variant="contained" color="primary" component="span" style={{ marginTop: 20 }}>Upload headshot photo</Button>
                </label>
            </Grid>

            <Grid item>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        label="Hire date"
                        value={selectedDate}
                        onChange={date => setSelectedDate(date)}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                </MuiPickersUtilsProvider>
            </Grid>

            <Grid item>
                <Button variant="contained" color="primary" style={{ marginTop: 15 }} onClick={() => handleCreateNewEmployee()}>Create</Button>
            </Grid>
        </Grid>
    )
}

export default CreateEmployee
