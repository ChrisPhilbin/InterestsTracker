import React, { useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllEmployees } from '../actions/EmployeeActions'
import EmployeeCard from '../components/employees/EmployeeCard'

const EmployeeList = () => {

    let dispatch = useDispatch()

    let loading   = useSelector(state => state.employees.loading)
    let hasErrors = useSelector(state => state.employees.hasErrors)
    let employees = useSelector(state => state.employees.employees)

    useEffect(() => {
        dispatch(fetchAllEmployees())
    },[])

    console.log(employees, "employees array from dispatch")
    console.log(loading, "loading?")
    console.log(hasErrors, "has errors?")

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
        <>
            {employees.map((employee) => (
                <EmployeeCard employee={employee} />
            ))}
        </>
        )
    }
}

export default EmployeeList