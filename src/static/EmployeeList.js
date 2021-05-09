import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllEmployees } from '../actions/EmployeeActions'
import Container from '@material-ui/core/Container'
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
        <Container style={{columns: '2 auto'}}>
            {employees.map((employee) => (
                <EmployeeCard employee={employee} key={employee.id}/>
            ))}
        </Container>
        )
    }
}

export default EmployeeList