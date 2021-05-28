import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchEmployeeInteractions } from '../../actions/InteractionActions'
import ShowErrors from '../../util/ShowErrors'
import ShowLoading from '../../util/ShowLoading'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typoegraphy from '@material-ui/core/Typography'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import HighlightOffIcon from '@material-ui/icons/HighlightOff'

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

    dayjs.extend(relativeTime)

    useEffect(() => {
        dispatch(fetchEmployeeInteractions(employee_id))
    }, [])

    let interactions = useSelector(state => state.interactions.interactions)
    let loading      = useSelector(state => state.interactions.loading)
    let hasErrors    = useSelector(state => state.interactions.hasErrors)

    const handleDelete = (interaction_id) => {
        if (window.confirm("Are you sure?")) {
            
        }
    }

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

    if (interactions) {
        return(
            <Paper className={classes.widget} elevation={3} square={false} style={{ padding: 15, marginBottom: 25 }}>
                <Typoegraphy variant="h4" gutterBottom>Recent interactions</Typoegraphy>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell><strong>Date of interaction</strong></TableCell>
                            <TableCell><strong>Type of interaction</strong></TableCell>
                            <TableCell><strong>Interaction notes</strong></TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {interactions.map((interaction) => (
                        <TableRow key={interaction.interaction_id}>
                            <TableCell>{dayjs(interaction.created_at).fromNow()}</TableCell>
                            <TableCell>{interaction.kind}</TableCell>
                            <TableCell>{interaction.notes}</TableCell>
                            <TableCell><HighlightOffIcon style={{ size: 10, color: 'red' }} onClick={() => handleDelete(interaction.interaction_id)} /></TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </Paper>
        )
    } 
}

export default DisplayAllEmployeeInteractions