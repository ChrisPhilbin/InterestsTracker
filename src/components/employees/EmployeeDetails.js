import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import { fetchOneEmployee } from "../../actions/EmployeeActions";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typoegraphy from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import useFormatDate from "../../hooks/useFormatDate";
import useCheckDate from "../../hooks/useCheckDate";
import ShowLoading from "../../util/ShowLoading";
import ShowErrors from "../../util/ShowErrors";
import DisplayAllEmployeeInterests from "../interests/DisplayAllEmployeeInterests";
import DisplayAllEmployeeSports from "../sports/DisplayAllEmployeeSports";
import DisplayAllEmployeeNotes from "../notes/DisplayAllEmployeeNotes";
import DisplayAllEmployeePets from "../pets/DisplayAllEmployeePets";
import DisplayAllEmployeeNews from "../newsfeed/DisplayAllEmployeeNews";
import DisplayAllEmployeeInteractions from "../interactions/DisplayAllEmployeeInteractions";
import { fetchPostNewInteraction } from "../../actions/InteractionActions";
import { deleteOneEmployee } from "../../actions/EmployeeActions";
import { updateEmployeeLastInteraction } from "../../actions/EmployeeActions";

const EmployeeDetails = (props) => {
  const dispatch = useDispatch();

  const employee_id = props.match.params.employee_id;

  dayjs.extend(relativeTime);

  let employee = useSelector((state) => state.employees.employee);
  let loading = useSelector((state) => state.employees.loading);
  let hasErrors = useSelector((state) => state.employees.hasErrors);

  useEffect(() => {
    dispatch(fetchOneEmployee(employee_id));
  }, [dispatch, employee_id]);

  let [dialogOpen, setDialogOpen] = useState(false);

  let [kind, setKind] = useState("");
  let [notes, setNotes] = useState("");

  const handleSubmit = () => {
    let interactionSubmit = {
      kind: kind,
      notes: notes,
      employee_id: employee_id,
    };
    dispatch(fetchPostNewInteraction(interactionSubmit));
    dispatch(updateEmployeeLastInteraction(employee_id));
    setDialogOpen(false);
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteOneEmployee(employee_id));
      props.history.push("/employees");
    }
  };

  let lastInteraction = dayjs(employee.last_interaction).fromNow();

  let hireDate = useFormatDate(employee.hire_date);
  let isRecent = useCheckDate(employee.last_interaction);
  let birthday = useFormatDate(employee.birthday);

  if (loading) {
    return (
      <>
        <ShowLoading />
      </>
    );
  } else if (hasErrors) {
    return (
      <>
        <ShowErrors />
      </>
    );
  } else if (employee) {
    return (
      <>
        <Dialog
          open={dialogOpen}
          onClose={() => setDialogOpen(false)}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Log an interaction</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Fill out the form below to log a recent interaction you had with
              Employee
            </DialogContentText>
            <InputLabel id="interaction-kind-select">
              Type of interaction
            </InputLabel>
            <Select
              labelId="interaction-kind-select"
              id="interaction-kind"
              style={{ minWidth: 180 }}
              value={kind}
              variant="outlined"
              onChange={(e) => setKind(e.target.value)}
            >
              <MenuItem value={"News item"}>News item</MenuItem>
              <MenuItem value={"Sports"}>Sports</MenuItem>
              <MenuItem value={"Pets"}>Pets</MenuItem>
            </Select>
            <FormHelperText>
              Select what type of interaction you're logging
            </FormHelperText>

            <TextField
              margin="dense"
              id="name"
              label="Notes/Details about interaction"
              type="text"
              onChange={(e) => setNotes(e.target.value)}
              fullWidth
              variant="outlined"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => handleSubmit()} style={{ color: "#005151" }}>
              Save
            </Button>
            <Button
              onClick={() => setDialogOpen(false)}
              style={{ color: "#005151" }}
            >
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
        <Container maxWidth="lg" style={{ paddingTop: 45 }}>
          <Card variant="outlined">
            <CardContent>
              <Typoegraphy variant="h4" gutterBottom>
                {employee.name}
              </Typoegraphy>

              <Typoegraphy variant="subtitle1">
                Hire date: {hireDate}
              </Typoegraphy>

              <Typoegraphy variant="subtitle1">
                Birthday: {birthday}
              </Typoegraphy>

              <Typoegraphy
                variant="subtitle1"
                gutterBottom
                style={isRecent ? { color: "red" } : { color: "green" }}
              >
                Last interaction: {lastInteraction}
              </Typoegraphy>
            </CardContent>
            <CardActions>
              <Button
                variant="outlined"
                onClick={() => setDialogOpen(true)}
                style={{ color: "#005151" }}
              >
                Log interaction
              </Button>
              <Button
                variant="outlined"
                style={{ color: "#005151" }}
                component={Link}
                to={`/employees/${employee_id}/edit`}
              >
                Edit details
              </Button>
              <Button
                color="secondary"
                variant="outlined"
                onClick={() => handleDelete()}
              >
                Remove employee
              </Button>
            </CardActions>
          </Card>
        </Container>

        <Container maxWidth="lg" style={{ paddingTop: 45 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={3}>
              <DisplayAllEmployeeInterests employee_id={employee_id} />
            </Grid>

            <Grid item xs={12} md={3}>
              <DisplayAllEmployeePets employee_id={employee_id} />
            </Grid>

            <Grid item xs={12} md={3}>
              <DisplayAllEmployeeSports employee_id={employee_id} />
            </Grid>

            <Grid item xs={12} md={3}>
              <DisplayAllEmployeeNotes employee_id={employee_id} />
            </Grid>
          </Grid>
        </Container>

        <Container maxWidth="lg" style={{ paddingTop: 45 }}>
          <DisplayAllEmployeeNews
            employee_id={employee_id}
            employee_name={employee.name}
          />
        </Container>

        <Container maxWidth="lg" style={{ paddingTop: 45 }}>
          <DisplayAllEmployeeInteractions employee_id={employee_id} />
        </Container>
      </>
    );
  }
};

export default EmployeeDetails;
