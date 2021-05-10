import React from 'react'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import dayjs from 'dayjs'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import relativeTime from 'dayjs/plugin/relativeTime'
import WarningIcon from '@material-ui/icons/Warning';


const useStyles = makeStyles((theme) => ({
    checkDate: {
        float: 'right',
        top: '10px',
        right: '15px',
    },
    root: {
        minWidth: 470,
    }
}))


const EmployeeCard = (props) => {

    const classes = useStyles()

    dayjs.extend(relativeTime)

    let employee = props.employee
    let lastInteraction = dayjs(props.employee.last_interaction).fromNow()

    let currentDate = new Date()
    let previousDate = new Date(props.employee.last_interaction)

    let minutesSinceLastInteraction = Math.round((((currentDate - previousDate)/1000)/60))

    return(
        <Card variant="outlined">
            <CardContent>
                <span className={classes.checkDate}>
                    { minutesSinceLastInteraction > 5760 ? <WarningIcon style={{color: 'red', fontSize: 45}}/> : <CheckCircleOutlineIcon  style={{color: 'green', fontSize: 45}}/>}
                </span>
                <Typography variant="h5" component="h2">
                    {employee.name}
                </Typography>
                <Typography color="textSecondary">
                    Last interaction: {lastInteraction}
                </Typography>
            </CardContent>
            <CardActions>
                <Link to={`/employees/${employee.id}`} style={{ textDecoration: 'none'}}><Button size="small" color="primary">View/Edit Details</Button></Link>
                <Button size="small" color="primary">Delete</Button>
            </CardActions>
        </Card>
    )
}

export default EmployeeCard