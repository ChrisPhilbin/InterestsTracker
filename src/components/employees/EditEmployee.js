import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchOneEmployee } from '../../actions/EmployeeActions'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import 'date-fns'
import DateFnsUtils from '@date-io/date-fns'
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers'

const EditEmployee = (props) => {

    const dispatch = useDispatch()

    const employee_id = props.match.params.employee_id

    const employee = useSelector(state => state.employees.employee)

    console.log(employee.name, "employee name")

    useEffect(() => {
        dispatch(fetchOneEmployee(employee_id))
    }, [dispatch, employee_id])

    const handleSubmit = () => {
        alert("Editing!")
    }
    
    return (
        <>
            <Grid style={{ padding: 40 }}>
                <Typography variant="h4" gutterBottom>Editing details for {employee.name}</Typography>

                <Grid item>
                    <TextField
                        required
                        id="fullname"
                        label="Full name"
                        variant="outlined"
                        value={employee.name}
                        
                    />
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
                            

                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                    </MuiPickersUtilsProvider>
                </Grid>

                <Grid item>
                    <Button variant="contained" color="primary" style={{ marginTop: 15 }} onClick={() => handleSubmit()}>Save changes</Button>
                </Grid>
            </Grid>
        </>
    )
}

export default EditEmployee