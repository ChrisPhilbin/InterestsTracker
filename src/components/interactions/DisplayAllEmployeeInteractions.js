import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchEmployeeInteractions } from '../../actions/InteractionActions'
import ShowErrors from '../../util/ShowErrors'
import ShowLoading from '../../util/ShowLoading'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typoegraphy from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
    widget: {
        padding: 15,
        borderRadius: 15
    }
}))

const DisplayAllEmployeeInteractions = (props) => {

    const classes = useStyles()
    const dispatch = useDispatch()
    const employee_id = props.employee_id

    useEffect(() => {
        dispatch(fetchEmployeeInteractions(employee_id))
    }, [])

    let interactions = useSelector(state => state.interactions.interactions)
    let loading      = useSelector(state => state.interactions.loading)
    let hasErrors    = useSelector(state => state.interactions.hasErrors)

    if (hasErrors) {
        return(
            <ShowErrors />
        )
    }

    if (loading) {
        return(
            <ShowLoading />
        )
    }

    if (interactions.length) {
        return(
            <Paper className={classes.widget} elevation={3} square={false} style={{ padding: 15 }}>
                <Typoegraphy variant="h4" gutterBottom>Recent interactions</Typoegraphy>
                Showing interactions...
            </Paper>
        )
    } else {
        return(
            <Paper className={classes.widget} elevation={3} square={false} style={{ padding: 15, marginBottom: 30 }}>
                <Typoegraphy variant="h4" gutterBottom>Recent interactions</Typoegraphy>
                It looks like there aren't any interactions logged yet.
            </Paper>
        )
    }
}

export default DisplayAllEmployeeInteractions