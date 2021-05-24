import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchEmployeePets, fetchPostNewPet, fetchDeletePet } from '../../actions/PetActions'
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

const DisplayAllEmployeePets = (props) => {

    const dispatch = useDispatch()

    const classes = useStyles()

    const employee_id = props.employee_id

    useEffect(() => {
        dispatch(fetchEmployeePets(employee_id))
    },[dispatch])

    let [open, setOpen]               = useState(false)
    let [newPet, setNewPet]           = useState('')
    let [newPetType, setNewPetType]   = useState('')

    let pets     = useSelector(state => state.pets.pets)
    let loading   = useSelector(state => state.pets.loading)
    let hasErrors = useSelector(state => state.pets.hasErrors)

    const handleSubmit = () => {
        let petSubmit = {
            name: newPet,
            kind: newPetType,
            employee_id: employee_id
        }
        dispatch(fetchPostNewPet(petSubmit))
        setOpen(false)
    }

    const handleDelete = pet_id => {
        if (window.confirm("Are you sure?")) {
            dispatch(fetchDeletePet(employee_id, pet_id))
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
    } else if (pets) {
        return(
            <>
                <Dialog open={open} onClose={() => setOpen(false)} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Add a new pet and the pet type</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Add a new pet and their type below
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Pet name"
                            fullWidth
                            variant="outlined"
                            onChange={(e) => setNewPet(e.target.value)}
                        />
                        <TextField
                            margin="dense"
                            id="name"
                            label="Pet Type"
                            fullWidth
                            variant="outlined"
                            onChange={(e) => setNewPetType(e.target.value)}
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
                    aria-label="Add new pet"
                    onClick={() => setOpen(true)}
                >
                    <AddCircleIcon style={{ color: '#005151', fontSize: 30 }} />
                </IconButton>
                
                <Paper elevation={3} className={classes.widget} square={false}>
                    <Typoegraphy variant="h5" style={{textAlign: 'center'}} gutterBottom>Pets</Typoegraphy>
                    <List dense={true}>
                        {pets.map((pet) => (
                            <ListItem key={pet.id}>
                                <span><HighlightOffIcon style={{ size: 10, color: 'red' }} onClick={() => handleDelete(pet.id)} /></span>&nbsp;<ListItemText primary={pet.name} />
                            </ListItem>
                        ))}
                    </List>
                </Paper>
            </>
        )
    }
}

export default DisplayAllEmployeePets