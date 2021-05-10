import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchEmployeeInterests } from '../../actions/InterestActions'


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
                {interests.map((interest) => (
                    <li key={interest.id}>{interest.name}</li>
                ))}
            </>
        )
    }
}

export default DisplayAllEmployeeInterests