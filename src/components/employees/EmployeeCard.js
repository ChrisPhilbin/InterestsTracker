import React from 'react'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import dayjs from 'dayjs'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'


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

    let employee = props.employee
    // let lastInteraction = dayjs(props.employee.lastInteraction).fromNow()

    return(
        <Grid item xs={12} sm={6} key={employee.id}>
            <Card className={classes.root} variant="outlined">
                <CardContent>
                    <Typography variant="h5" component="h2">
                        {employee.name}
                    </Typography>
                    <Typography color="textSecondary">
                        {/* Last interaction: {lastInteraction >= 4 ? <span className="classes.overdue">{lastInteraction}</span> : {lastInteraction} } */}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default EmployeeCard