import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchOneEmployee } from '../../actions/EmployeeActions'

const EditEmployee = (props) => {

    const dispatch = useDispatch()

    let employee = useSelector(state => state.employees.employee)

    let [name, setName]                       = useState(employee.name)
    let [hireDate, setHireDate]               = useState(employee.hire_date)
    let [lastInteraction, setLastInteraction] = useState(employee.last_interaction)
    let [birthday, setBirthday]               = useState(employee.birthday)

    useEffect(() => {
        dispatch(fetchOneEmployee(props.employee_id))
    }, [])

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
                        value={name}
                        onChange={(e) => setName(e.target.value)}
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
                            value={hireDate}
                            onChange={date => setHireDate(date)}
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