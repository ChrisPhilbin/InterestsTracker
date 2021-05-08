import React, { useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import EmployeeCard from '../components/employees/EmployeeCard'

const EmployeeList = () => {

    let dispatch = useDispatch()

    let loading   = useSelector(state => state.employees.loading)
    let hasErrors = useSelector(state => state.employees.hasErrors)
    let employees = useSelector(state => state.employees.interests)

    useEffect(() => {
        console.log("component has mounted!")
    },[])

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
    } else {
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