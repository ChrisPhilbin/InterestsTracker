import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchEmployeeSports, fetchPostNewSport, fetchDeleteSport } from '../../actions/SportActions'
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

const DisplayAllEmployeeSports = (props) => {

    const dispatch = useDispatch()

    const classes = useStyles()

    const employee_id = props.employee_id

    useEffect(() => {
        dispatch(fetchEmployeeSports(employee_id))
    },[dispatch, employee_id])

    let [open, setOpen]               = useState(false)
    let [newSport, setNewSport]           = useState('')
    let [newSportCity, setNewSportCity]   = useState('')

    let sports     = useSelector(state => state.sports.sports)
    let loading    = useSelector(state => state.sports.loading)
    let hasErrors  = useSelector(state => state.sports.hasErrors)

    const handleSubmit = () => {
        let sportSubmit = {
            teamname: newSport,
            city: newSportCity,
            employee_id: employee_id
        }
        dispatch(fetchPostNewSport(sportSubmit))
        setOpen(false)
    }

    const handleDelete = sport_id => {
        if (window.confirm("Are you sure?")) {
            dispatch(fetchDeleteSport(employee_id, sport_id))
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
    } else if (sports) {
        return(
            <>
                <Dialog open={open} onClose={() => setOpen(false)} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Add a new sports team and their city</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Add a new city name and sports team below (Example: "New York Rangers")
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Sports team name"
                            fullWidth
                            variant="outlined"
                            onChange={(e) => setNewSport(e.target.value)}
                        />
                        <TextField
                            margin="dense"
                            id="name"
                            label="City"
                            fullWidth
                            variant="outlined"
                            onChange={(e) => setNewSportCity(e.target.value)}
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
                    <Typoegraphy variant="h5" style={{textAlign: 'center'}} gutterBottom>Favorite Teams</Typoegraphy>
                    <List dense={true}>
                        {sports.map((sport) => (
                            <ListItem key={sport.id}>
                                <span><HighlightOffIcon style={{ size: 10, color: 'red' }} onClick={() => handleDelete(sport.id)} /></span>&nbsp;<ListItemText primary={`${sport.city} ${sport.teamname}`} />
                            </ListItem>
                        ))}
                    </List>
                </Paper>
            </>
        )
    }
}

export default DisplayAllEmployeeSports