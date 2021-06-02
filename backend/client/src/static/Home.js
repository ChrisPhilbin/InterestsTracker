import React from 'react'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'

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
            <Button component={Link} to="/employees" variant="contained" style={{ background: '#005151', color: '#FFFFFF' }}>Start building relationships</Button>
        </Container>
    )
}

export default Home