import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Container from '@material-ui/core/Container'
import { fetchOneEmployee } from '../../actions/EmployeeActions'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typoegraphy from '@material-ui/core/Typography'
import DisplayAllEmployeeInterests from '../interests/DisplayAllEmployeeInterests'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'


const useStyles = makeStyles((theme) => ({

}))

const EmployeeDetails = (props) => {

    const dispatch = useDispatch()

    const employee_id = props.match.params.employee_id

    dayjs.extend(relativeTime)

    useEffect(() => {
        dispatch(fetchOneEmployee(employee_id))
    },[dispatch])

    const classes = useStyles()

    let employee   = useSelector(state => state.employees.employee)
    let loading    = useSelector(state => state.employees.loading)
    let hasErrors  = useSelector(state => state.employees.hasErrors)

    let lastInteraction = dayjs(employee.last_interaction).fromNow()

    if (loading) {
        return(
            <>
                Loading... Please wait
            </>
        )
    } else if (hasErrors) {
        return(
            <>
                Something went wrong
            </>
        )
    } else if (employee) {
        return (
            <Container maxWidth="md" style={{ paddingTop: 45 }}>
                <Paper elevation={3} style={{ padding: 15 }}>
                    <Typoegraphy variant="h4" gutterBottom>{employee.name}</Typoegraphy>

                    <Typoegraphy variant="subtitle1" gutterBottom>Hire date: {new Date(employee.hire_date).toString()}</Typoegraphy>

                    <Typoegraphy variant="subtitle1" gutterBottom>Last interaction: {lastInteraction}</Typoegraphy>

                    <Typoegraphy variant="h5" gutterBottom>Interests & Hobbies</Typoegraphy>

                    <DisplayAllEmployeeInterests employee_id={employee_id} />

                </Paper>
            </Container>
        )
    } 

}

export default EmployeeDetails