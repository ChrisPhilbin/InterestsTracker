import React from 'react'
import ReportProblemIcon from '@material-ui/icons/ReportProblem'
import { makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles({
    uiErrors: {
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: 10,
        margin: 10
	}
})

const ShowErrors = (errors) => {

    const classes = useStyles()

    return(
        <div className={classes.root}>
            <ReportProblemIcon size={150} className={classes.uiErrors} style={{ color: 'red' }} />
        </div>
    )
}

export default ShowErrors