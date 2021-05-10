import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Container from '@material-ui/core/Container'
import { fetchEmployeeInterests } from '../../actions/InterestActions'
import { fetchOneEmployee } from '../../actions/EmployeeActions'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typoegraphy from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({

}))

const EmployeeDetails = (props) => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchEmployeeInterests(props.match.params.employee_id))
        dispatch(fetchOneEmployee(props.match.params.employee_id))
    },[dispatch])

    const classes = useStyles()

    let interests          = useSelector(state => state.interests.interests)
    let interestsLoading   = useSelector(state => state.interests.loading)
    let interestsHasErrors = useSelector(state => state.interests.hasErrors)
    let employee           = useSelector(state => state.employees.employee)
    let employeeLoading    = useSelector(state => state.employees.loading)
    let employeeHasErrors  = useSelector(state => state.employees.hasErrors)

    if (interestsLoading || employeeLoading) {
        return(
            <>
                Loading... Please wait
            </>
        )
    } else if (interestsHasErrors || employeeHasErrors) {
        return(
            <>
                Something went wrong
            </>
        )
    } else if (interests && employee) {
        return (
            <Container maxWidth="md" style={{ paddingTop: 45 }}>
                <Paper elevation={3} style={{ padding: 15 }}>
                    <Typoegraphy variant="h4" gutterBottom>{employee.name}</Typoegraphy>

                    <Typoegraphy variant="subtitle1" gutterBottom>Hire date: {new Date(employee.hire_date).toString()}</Typoegraphy>

                    <Typoegraphy variant="subtitle1" gutterBottom>Last interaction: {new Date(employee.last_interaction).toString()}</Typoegraphy>

                    <Typoegraphy variant="h5" gutterBottom>Interests & Hobbies</Typoegraphy>

                    {interests.map((interest) => (
                        <li key={interest.id}>{interest.name}</li>
                    ))}

                </Paper>
            </Container>
        )
    } 

}

export default EmployeeDetails