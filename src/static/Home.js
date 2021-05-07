import React from 'react'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    introContainer: {
        top: '50%',
        left: '50%',
        marginTop: 150,
        textAlign: 'center',
    }
}))

const Home = () => {
    const classes = useStyles()

    return(
        <Container className={classes.introContainer}>
            <Typography variant="h2" gutterBottom>
                We help managers build real relationships with their employees.
            </Typography>
            <Button variant="contained" color="primary">Start Connecting</Button>
        </Container>
    )
}

export default Home