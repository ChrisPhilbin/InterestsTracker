import React from 'react'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import dayjs from 'dayjs'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import relativeTime from 'dayjs/plugin/relativeTime'


const useStyles = makeStyles((theme) => ({
    overdue: {
        color: 'red'
    },
    root: {
        minWidth: 470
    }
}))


const EmployeeCard = (props) => {

    const classes = useStyles()

    dayjs.extend(relativeTime)

    let employee = props.employee
    let lastInteraction = dayjs(props.employee.last_interaction).fromNow()
    console.log(props.employee.last_interaction, "last interaction from the employee passed in")
    console.log(lastInteraction, "last interaction")

    return(
        <Grid item xs={12} sm={6} key={employee.id}>
            <Card className={classes.root} variant="outlined">
                <CardContent>
                    <Typography variant="h5" component="h2">
                        {employee.name}
                    </Typography>
                    <Typography color="textSecondary">
                        Last interaction: {lastInteraction}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default EmployeeCard