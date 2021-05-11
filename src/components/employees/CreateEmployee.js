import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const CreateEmployee = () => {
    return(
        <Grid spacing={3} style={{ padding: 40 }}>
            <Typography variant="h4" gutterBottom>Add a new employee</Typography>

            <Grid item>
                <TextField
                    required
                    id="fullname"
                    label="Full name"
                    defaultValue="Michael Smith"
                    variant="outlined"
                />
            </Grid>

            <Grid item>
                <Button variant="contained" color="primary" style={{ marginTop: 15 }}>Create</Button>
            </Grid>
        </Grid>
    )
}

export default CreateEmployee
