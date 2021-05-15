import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchEmployeeInterests, fetchPostNewInterest, fetchDeleteInterest } from '../../actions/InterestActions'
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

const DisplayAllEmployeeInterests = (props) => {

    const dispatch = useDispatch()

    const classes = useStyles()

    const employee_id = props.employee_id

    useEffect(() => {
        dispatch(fetchEmployeeInterests(employee_id))
    },[dispatch])

    let [open, setOpen]               = useState(false)
    let [newInterest, setNewInterest] = useState('')

    let interests = useSelector(state => state.interests.interests)
    let loading   = useSelector(state => state.interests.loading)
    let hasErrors = useSelector(state => state.interests.hasErrors)

    const handleSubmit = () => {
        let interestSubmit = {
            name: newInterest,
            employee_id: employee_id
        }
        dispatch(fetchPostNewInterest(interestSubmit))
        setOpen(false)
    }

    const handleDelete = interest_id => {
        if (window.confirm("Are you sure?")) {
            dispatch(fetchDeleteInterest(employee_id, interest_id))
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
    } else if (interests) {
        return(
            <>
                <Dialog open={open} onClose={() => setOpen(false)} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Add a new interest or hobby</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Add a new interest or hobby below
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Interest name"
                            fullWidth
                            variant="outlined"
                            onChange={(e) => setNewInterest(e.target.value)}
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
                    aria-label="Add new interest"
                    onClick={() => setOpen(true)}
                >
                    <AddCircleIcon style={{ fontSize: 30 }} />
                </IconButton>
                
                <Paper elevation={3} className={classes.widget} square={false}>
                    <Typoegraphy variant="h5" style={{textAlign: 'center'}} gutterBottom>Interests/Hobbies</Typoegraphy>
                    <List dense={true}>
                        {interests.map((interest) => (
                            <ListItem key={interest.id}>
                                <span><HighlightOffIcon style={{ size: 10, color: 'red' }} onClick={() => handleDelete(interest.id)} /></span>&nbsp;<ListItemText
                                    primary={interest.name}
                                />
                            </ListItem>
                        ))}
                    </List>
                </Paper>
            </>
        )
    }
}

export default DisplayAllEmployeeInterests