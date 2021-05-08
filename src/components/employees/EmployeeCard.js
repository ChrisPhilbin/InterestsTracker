import React from 'react'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 470
    }
}))


const EmployeeCard = (props) => {

    const classes = useStyles()

    let employee = props.employee

    return(
        <Grid item xs={12} sm={6} key={employee.id}>
            <Card className={classes.root} variant="outlined">
                <CardContent>
                    <Typography variant="h5" component="h2">
                        {employee.name}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default EmployeeCard