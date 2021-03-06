import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Badge from "@material-ui/core/Badge";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Link } from "react-router-dom";
import { fetchEmployeeAlerts } from "../actions/AlertActions";
import useIsLoggedIn from "../hooks/useIsLoggedIn";
import defaultFetchOptions from "../config/FetchDefault";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function TopNav() {
  const classes = useStyles();

  const dispatch = useDispatch();

  const isLoggedIn = useIsLoggedIn();

  useEffect(() => {
    dispatch(fetchEmployeeAlerts);
  }, [dispatch]);

  const handleLogout = () => {
    console.log("handling logging out!");
    fetch("http://localhost:3001/users/sign_out", {
      ...defaultFetchOptions,
      method: "DELETE",
    });
    localStorage.removeItem("AuthToken");
    window.location.replace("/");
  };

  let alerts = useSelector((state) => state.alerts.alerts);

  let [open, setOpen] = useState(false);

  let alertIcon;

  const [anchorEl, setAnchorEl] = React.useState(null);
  const openMenu = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  if (Object.keys(alerts).length) {
    alertIcon = (
      <Badge
        badgeContent={alerts.overdue_alerts.length}
        color="secondary"
        onClick={() => setOpen(true)}
      >
        <NotificationsIcon />
      </Badge>
    );
  }

  let modal;

  if (Object.keys(alerts).length) {
    modal = (
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
            <p id="transition-modal-description">
              <strong>Try to interact with the following employees:</strong>
            </p>
            {alerts.overdue_alerts.map((employee) => (
              <span key={employee.id}>
                <Link
                  to={`/employees/${employee.id}`}
                  onClick={() => setOpen(false)}
                >
                  {employee.name}
                </Link>
                <br />
              </span>
            ))}
            <p id="transition-modal-description">
              <strong>Today's birthdays:</strong>
            </p>
            {alerts.todays_birthdays.length ? (
              <>
                {alerts.todays_birthdays.map((employee) => (
                  <span>{employee.name}</span>
                ))}
              </>
            ) : (
              <span>No birthdays today</span>
            )}
            <p id="transition-modal-description">
              <strong>Upcoming birthdays:</strong>
            </p>
            {alerts.upcoming_birthdays.length ? (
              <>
                {alerts.upcoming_birthdays.map((employee) => (
                  <span key={employee.id}>
                    <Link
                      to={`/employees/${employee.id}`}
                      onClick={() => setOpen(false)}
                    >
                      {employee.name}
                    </Link>
                  </span>
                ))}
              </>
            ) : (
              <span>No upcoming birthdays</span>
            )}
          </div>
        </Fade>
      </Modal>
    );
  }

  return (
    <div className={classes.root}>
      {modal}

      <AppBar position="static" style={{ background: "#005151" }}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon onClick={handleClick} />

            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={openMenu}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem component={Link} to="/" onClick={handleClose}>
                Home
              </MenuItem>
              <MenuItem component={Link} to="/employees" onClick={handleClose}>
                My team
              </MenuItem>
              <MenuItem component={Link} to="/" onClick={handleLogout}>
                Logout
              </MenuItem>
            </Menu>
          </IconButton>
          <Typography
            variant="h6"
            className={classes.title}
            component={Link}
            to="/employees"
            style={{ color: "white", textDecoration: "none" }}
          >
            Realationships
          </Typography>
          {alertIcon}
          {isLoggedIn ? (
            <Button
              color="inherit"
              style={{ paddingLeft: 20 }}
              onClick={() => handleLogout()}
            >
              Logout
            </Button>
          ) : (
            <Button
              color="inherit"
              component={Link}
              to="/sign_in"
              style={{ paddingLeft: 20 }}
            >
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
