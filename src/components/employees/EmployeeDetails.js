import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Container from '@material-ui/core/Container'
import { fetchEmployeeInterests } from '../../actions/InterestActions'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({

}))

const EmployeeDetails = (props) => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchEmployeeInterests(props.match.params.employee_id))
    },[dispatch])

    const classes = useStyles()

    let employee = props.employee

    let interests = useSelector(state => state.interests.interests)

    return(
        <>
            All employee details to be displayed here
        </>
    )
}

export default EmployeeDetails