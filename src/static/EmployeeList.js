import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllEmployees } from '../actions/EmployeeActions'
import Grid from '@material-ui/core/Grid'
import EmployeeCard from '../components/employees/EmployeeCard'
import { makeStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import { Link } from 'react-router-dom'
import ShowLoading from '../util/ShowLoading'
import ShowErrors from '../util/ShowErrors'
import Container from '@material-ui/core/Container'
import EmployeeDashboard from '../components/dashboard/EmployeeDashboard'

const useStyles = makeStyles((theme) => ({
    floatingButton: {
        position: 'fixed',
        bottom: 0,
        right: 0
    }
}))

const EmployeeList = () => {

    const dispatch = useDispatch()

    const classes = useStyles()

    let loading   = useSelector(state => state.employees.loading)
    let hasErrors = useSelector(state => state.employees.hasErrors)
    let employees = useSelector(state => state.employees.employees)

    useEffect(() => {
        dispatch(fetchAllEmployees())
    },[dispatch])

    if (loading) {
        return(
            <>
                <ShowLoading />
            </>
        )
    } else if (hasErrors) {
        return(
            <>
                <ShowErrors />
            </>
        )
    } else if (employees) {
        return(
            <Container maxWidth="lg">
                <IconButton
                    className={classes.floatingButton}
                    color="primary"
                    aria-label="Add Employuee"
                    component={Link}
                    to="/employees/new"
                >
                    <AddCircleIcon style={{ fontSize: 60 }} />
                </IconButton>

                <Grid container spacing={3} style={{ marginTop: 30 }}>
                    <EmployeeDashboard />
                </Grid>

                <Grid container spacing={3} style={{marginTop: 30}}>
                    {employees.map((employee) => (
                        <Grid item xs={12} sm={6} key={employee.id}>
                            <EmployeeCard employee={employee} key={employee.id}/>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        )
    }
}

export default EmployeeList