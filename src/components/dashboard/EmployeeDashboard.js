import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchEmployeeAlerts } from '../../actions/AlertActions'

const EmployeeDashboard = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchEmployeeAlerts())
    }, [])

    let alerts    = useSelector(state => state.alerts.alerts)
    let loading   = useSelector(state => state.alerts.loading)
    let hasErrors = useSelector(state => state.alerts.hasErrors)
    
    return(
        <>
            Alerts
        </>
    )
}

export default EmployeeDashboard
