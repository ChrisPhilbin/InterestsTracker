import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchOneEmployee } from '../../actions/EmployeeActions'

const EditEmployee = (props) => {

    const dispatch = useDispatch()

    let employee = useSelector(state => state.employees.employee)

    useEffect(() => {
        dispatch(fetchOneEmployee(props.employee_id))
    }, [])
    return (
        <>

        </>
    )
}

export default EditEmployee