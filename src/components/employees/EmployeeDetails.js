import React from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({

}))

const EmployeeDetails = (props) => {

    const classes = useStyles()

    let employee = props.employee

    return(
        <>
            All employee details to be displayed here
        </>
    )
}

export default EmployeeDetails