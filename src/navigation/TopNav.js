import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Badge from '@material-ui/core/Badge'
import MailIcon from '@material-ui/icons/Mail'
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade'
import { Link } from 'react-router-dom'
import { fetchEmployeeAlerts } from '../actions/AlertActions';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function TopNav() {
  const classes = useStyles();

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchEmployeeAlerts)
  }, [])

  let alerts = useSelector(state => state.alerts.alerts)
  let loading = useSelector(state => state.alerts.loading)

  let [open, setOpen] = useState(false)

  let alertIcon

  if (Object.keys(alerts).length && !loading) {
    alertIcon = (
      <Badge badgeContent={alerts.overdue_alerts.length} color="secondary" onClick={() => setOpen(true)}>
        <MailIcon />
      </Badge>
    )
  }

  return (
    <div className={classes.root}>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={() => setOpen(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Active alerts</h2>
            <p id="transition-modal-description">The following employees have upcoming events:</p>
          </div>
        </Fade>
      </Modal>

      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title} component={Link} to="/employees" style={{ color: 'white', textDecoration: 'none' }}>
            Realationships
          </Typography>
            {alertIcon}
          <Button color="inherit" style={{ paddingLeft: 20 }}>Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
