import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchEmployeeNotes, fetchPostNewNote, fetchDeleteNote } from '../../actions/NoteActions'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Paper from '@material-ui/core/Paper'
import IconButton from '@material-ui/core/IconButton'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import Typoegraphy from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import ShowLoading from '../../util/ShowLoading'
import ShowErrors from '../../util/ShowErrors'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import HighlightOffIcon from '@material-ui/icons/HighlightOff'

const useStyles = makeStyles((theme) => ({
    addItemIcon: {
        float: 'right',
        bottom: '0px',
        left: 0
    },
    widget: {
        padding: 15,
        borderRadius: 15
    }
}))

const DisplayAllEmployeeNotes = (props) => {

    const dispatch = useDispatch()

    const classes = useStyles()

    const employee_id = props.employee_id

    useEffect(() => {
        dispatch(fetchEmployeeNotes(employee_id))
    },[dispatch, employee_id])

    let [open, setOpen]       = useState(false)
    let [newNote, setNewNote] = useState('')

    let notes      = useSelector(state => state.notes.notes)
    let loading    = useSelector(state => state.notes.loading)
    let hasErrors  = useSelector(state => state.notes.hasErrors)

    const handleSubmit = () => {
        let noteSubmit = {
            contents: newNote,
            employee_id: employee_id
        }
        dispatch(fetchPostNewNote(noteSubmit))
        setOpen(false)
    }

    const handleDelete = note_id => {
        if (window.confirm("Are you sure?")) {
            dispatch(fetchDeleteNote(employee_id, note_id))
        }
    }

    if (loading) {
        return(
            <ShowLoading />
        )
    } else if (hasErrors) {
        return(
            <ShowErrors />
        )
    } else if (notes) {
        return(
            <>
                <Dialog open={open} onClose={() => setOpen(false)} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Add a new note below</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Add a note/reminder below
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="content"
                            label="Notes/Thoughts/Ideas..."
                            multiline
                            rows={6}
                            fullWidth
                            variant="outlined"
                            onChange={(e) => setNewNote(e.target.value)}
                        />
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={() => setOpen(false)} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={() => handleSubmit()} color="primary">
                        Save
                    </Button>
                    </DialogActions>
                </Dialog>

                <IconButton
                    className={classes.addItemIcon}
                    color="primary"
                    aria-label="Add new note"
                    onClick={() => setOpen(true)}
                >
                    <AddCircleIcon style={{ color: '#005151', fontSize: 30 }} />
                </IconButton>
                
                <Paper elevation={3} className={classes.widget} square={false}>
                    <Typoegraphy variant="h5" style={{textAlign: 'center'}} gutterBottom>Notes</Typoegraphy>
                    <List dense={true}>
                        {notes.map((note) => (
                            <ListItem key={note.id}>
                                <span><HighlightOffIcon style={{ size: 10, color: 'red' }} onClick={() => handleDelete(note.id)} /></span>&nbsp;<ListItemText primary={`${note.contents}`} />
                            </ListItem>
                        ))}
                    </List>
                </Paper>
            </>
        )
    }
}

export default DisplayAllEmployeeNotes