import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchOneEmployee,
  updateEmployee,
} from "../../actions/EmployeeActions";
import ShowLoading from "../../util/ShowLoading";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

const EditEmployee = (props) => {
  const employee_id = props.match.params.employee_id;

  const dispatch = useDispatch();

  let loading = useSelector((state) => state.employees.loading);
  let employee = useSelector((state) => state.employees.employee);

  let [newEmployee, setNewEmployee] = useState(employee);

  useEffect(() => {
    dispatch(fetchOneEmployee(employee_id));
  }, [dispatch, employee_id]);

  const handleSubmit = (newEmployee) => {
    dispatch(updateEmployee(newEmployee));
  };

  if (loading) {
    return <ShowLoading />;
  }

  if (Object.keys(employee).length > 0) {
    return (
      <>
        <Grid style={{ padding: 40 }}>
          <Typography variant="h4" gutterBottom>
            Editing details for {employee.name}
          </Typography>

          <Grid item>
            <TextField
              id="fullname"
              label="Full name"
              defaultValue={employee.name}
              onChange={(e) =>
                setNewEmployee({ ...newEmployee, name: e.target.value })
              }
            />
          </Grid>

          <Grid item>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="date-picker-inline"
                value={newEmployee.hire_date}
                onChange={(date) =>
                  setNewEmployee({ ...newEmployee, hire_date: date })
                }
                label="Hire date"
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              />
            </MuiPickersUtilsProvider>
          </Grid>

          <Grid item>
            <Button
              variant="contained"
              color="primary"
              style={{ marginTop: 15 }}
              onClick={() => handleSubmit(newEmployee)}
            >
              Save changes
            </Button>
          </Grid>
        </Grid>
      </>
    );
  } else {
    return null;
  }
};

export default EditEmployee;
