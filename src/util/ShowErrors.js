import React from 'react'
import ReportProblemIcon from '@material-ui/icons/ReportProblem'
import { makeStyles} from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

const useStyles = makeStyles({
    uiErrors: {
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: 10,
        margin: 10
	},
    warningMessage: {
        textAlign: 'center'
    }
})

const ShowErrors = (props) => {

    const classes = useStyles()

    return(
        <div className={classes.root}>
            <ReportProblemIcon className={classes.uiErrors} style={{ color: 'red', fontSize: 110 }} /> <br />
            <Typography className={classes.warningMessage} variant="h3" gutterBottom>{props.message}</Typography>
        </div>
    )
}

export default ShowErrors