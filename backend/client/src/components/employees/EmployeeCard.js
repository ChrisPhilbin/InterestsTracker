import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import dayjs from 'dayjs'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import relativeTime from 'dayjs/plugin/relativeTime'
import WarningIcon from '@material-ui/icons/Warning'
import useCheckDate from '../../hooks/useCheckDate'
import CreateInteraction from '../interactions/CreateInteraction'
import { deleteOneEmployee } from '../../actions/EmployeeActions'

const useStyles = makeStyles((theme) => ({
    checkDate: {
        float: 'right',
        top: '10px',
        right: '15px',
    },
    root: {
        minWidth: 470,
    }
}))


const EmployeeCard = (props) => {

    const classes = useStyles()

    const dispatch = useDispatch()

    dayjs.extend(relativeTime)

    let employee = props.employee
    let lastInteraction = dayjs(props.employee.last_interaction).fromNow()

    let [openDialog, setOpenDialog] = useState(false)
    
    const handleDelete = (employee_id) => {
        if (window.confirm("Are you sure?")) {
            dispatch(deleteOneEmployee(employee_id))
        }
    }

    return(
        <>
            {openDialog && <CreateInteraction openDialog={openDialog} setOpenDialog={setOpenDialog} />}
            <Card variant="outlined">
                <CardContent>
                    <span className={classes.checkDate}>
                        { useCheckDate(props.employee.last_interaction) ? <WarningIcon style={{color: 'red', fontSize: 45}}/> : <CheckCircleOutlineIcon  style={{color: 'green', fontSize: 45}}/>}
                    </span>
                    <Typography variant="h5" component="h2">
                        {employee.name}
                    </Typography>
                    <Typography color="textSecondary">
                        Last interaction: {lastInteraction}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Link to={`/employees/${employee.id}`} style={{ textDecoration: 'none'}}><Button size="small" style={{ color: '#005151' }}>View/Edit Details</Button></Link>
                    <Button size="small" onClick={() => setOpenDialog(true)} style={{ color: '#005151' }}>Log interaction</Button>
                    <Button size="small" onClick={() => handleDelete(employee.id)} style={{ color: '#005151' }}>Delete</Button>
                </CardActions>
            </Card>
        </>
    )
}

export default EmployeeCard