import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchEmployeeInterests } from '../../actions/InterestActions'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Paper from '@material-ui/core/Paper'
import IconButton from '@material-ui/core/IconButton'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import Typoegraphy from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import ShowLoading from '../../util/ShowLoading'

const useStyles = makeStyles((theme) => ({
    addItemIcon: {
        float: 'right',
        bottom: '0px',
        left: 0
    },
    widget: {
        padding: 15
    }
}))

const DisplayAllEmployeeInterests = (props) => {

    const dispatch = useDispatch()

    const classes = useStyles()

    const employee_id = props.employee_id

    useEffect(() => {
        dispatch(fetchEmployeeInterests(employee_id))
    },[dispatch])

    let interests = useSelector(state => state.interests.interests)
    let loading   = useSelector(state => state.interests.loading)
    let hasErrors = useSelector(state => state.interests.hasErrors)

    console.log(interests, "interests arr")

    if (loading) {
        return(
            <ShowLoading />
        )
    } else if (hasErrors) {
        return(
            <>
            Something went wrong
            </>
        )
    } else if (interests) {
        return(
            <>
                <IconButton
                    className={classes.addItemIcon}
                    color="primary"
                    aria-label="Add new interest"
                >
                    <AddCircleIcon style={{ fontSize: 30 }} />
                </IconButton>
                
                <Paper elevation={3} className={classes.widget}>
                    <Typoegraphy variant="h5" style={{textAlign: 'center'}} gutterBottom>Interests/Hobbies</Typoegraphy>
                    <List dense="true">
                        {interests.map((interest) => (
                            <ListItem key={interest.id}>
                                <ListItemText
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