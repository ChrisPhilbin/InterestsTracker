import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import { fetchOneEmployee } from '../../actions/EmployeeActions'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typoegraphy from '@material-ui/core/Typography'
import DisplayAllEmployeeInterests from '../interests/DisplayAllEmployeeInterests'
import DisplayAllEmployeeSports from '../sports/DisplayAllEmployeeSports'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import useFormatDate from '../../hooks/useFormatDate'
import useCheckDate from '../../hooks/useCheckDate'
import ShowLoading from '../../util/ShowLoading'
import ShowErrors from '../../util/ShowErrors'
import IconButton from '@material-ui/core/IconButton'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import DisplayAllEmployeePets from '../pets/DisplayAllEmployeePets'


const useStyles = makeStyles((theme) => ({
    addItemIcon: {
        float: 'right',
        bottom: '0px',
        left: 0
    },
    editButton: {
        float: 'right',
        top: '10px',
        right: '15px',
    },
    widget: {
        padding: 15
    }
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

    let hireDate = useFormatDate(employee.hire_date)
    let isRecent = useCheckDate(employee.last_interaction)

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
    } else if (employee) {
        return (
            <>
                <Container maxWidth="lg" style={{ paddingTop: 45 }}>
                    <Paper elevation={3} style={{ padding: 15 }}>
                        <span className={classes.editButton}><Button variant="contained" color="primary">Edit details</Button></span>
                        <Typoegraphy variant="h4" gutterBottom>{employee.name}</Typoegraphy>

                        <Typoegraphy variant="subtitle1" gutterBottom>Hire date: {hireDate}</Typoegraphy>

                        <Typoegraphy variant="subtitle1" gutterBottom style={ isRecent ? { color: 'red' } : { color: 'green'} }>Last interaction: {lastInteraction}</Typoegraphy>

                    </Paper>
                </Container>

                <Container maxWidth="lg" style={{ paddingTop: 45 }}>
                    <Grid container spacing={3}>
                        <Grid item xs={3}>
                            <DisplayAllEmployeeInterests employee_id={employee_id} />
                        </Grid>

                        <Grid item xs={3}>
                            <DisplayAllEmployeePets employee_id={employee_id} />
                        </Grid>

                        <Grid item xs={3}>
                            <DisplayAllEmployeeSports employee_id={employee_id} />
                        </Grid>

                        <Grid item xs={3}>
                            <IconButton
                                className={classes.addItemIcon}
                                color="primary"
                                aria-label="Add new note"
                            >
                                <AddCircleIcon style={{ fontSize: 30 }} />
                            </IconButton>
                            <Paper elevation={3} className={classes.widget}>
                                <Typoegraphy variant="h5" style={{textAlign: 'center'}} gutterBottom>Notes</Typoegraphy>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>

                <Container maxWidth="lg" style={{ paddingTop: 45 }}>
                    <Paper elevation={3} style={{ padding: 15 }}>
                        <Typoegraphy variant="h4" gutterBottom>{employee.name}'s Newsfeed</Typoegraphy>
                        <Typoegraphy variant="subtitle2"><em>Inspired by {employee.name}'s interests, hobbies, pets, and sports teams</em></Typoegraphy>

                    </Paper>
                </Container>
            </>
        )
    } 

}

export default EmployeeDetails