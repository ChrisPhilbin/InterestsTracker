import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllEmployees } from '../actions/EmployeeActions'
import Grid from '@material-ui/core/Grid'
import EmployeeCard from '../components/employees/EmployeeCard'

const EmployeeList = () => {

    let dispatch = useDispatch()

    let loading   = useSelector(state => state.employees.loading)
    let hasErrors = useSelector(state => state.employees.hasErrors)
    let employees = useSelector(state => state.employees.employees)

    useEffect(() => {
        dispatch(fetchAllEmployees())
    },[dispatch])


    if (loading) {
        return(
            <>
                Loading... Please wait
            </>
        )
    } else if (hasErrors) {
        return(
            <>
                Error. Something went wrong!
            </>
        )
    } else if (employees) {
        return(
            <Grid container spacing={3} style={{marginTop: 30}}>
                {employees.map((employee) => (
                    <Grid item xs={12} sm={6} key={employee.id}>
                        <EmployeeCard employee={employee} key={employee.id}/>
                    </Grid>
                ))}
            </Grid>
        )
    }
}

export default EmployeeList