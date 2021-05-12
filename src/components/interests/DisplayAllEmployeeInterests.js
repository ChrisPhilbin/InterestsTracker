import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchEmployeeInterests } from '../../actions/InterestActions'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'


const DisplayAllEmployeeInterests = (props) => {

    const dispatch = useDispatch()

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
            <>
            Loading...
            </>
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
                <List dense="true">
                    {interests.map((interest) => (
                        <ListItem key={interest.id}>
                            <ListItemText
                                primary={interest.name}
                            />
                        </ListItem>
                    ))}
                </List>
            </>
        )
    }
}

export default DisplayAllEmployeeInterests