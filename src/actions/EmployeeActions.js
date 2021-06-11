import defaultFetchOptions from "../config/FetchDefault";

export const GET_EMPLOYEES = "GET_EMPLOYEES";
export const GET_EMPLOYEES_SUCCESS = "GET_EMPLOYEES_SUCCESS";
export const GET_EMPLOYEES_FAILURE = "GET_EMPLOYEES_FAILURE";

export const GET_ONE_EMPLOYEE = "GET_ONE_EMPLOYEE";
export const GET_ONE_EMPLOYEE_SUCCESS = "GET_ONE_EMPLOYEE_SUCCESS";
export const GET_ONE_EMPLOYEE_FAILURE = "GET_ONE_EMPLOYEE_FAILURE";

export const EMPLOYEE_CREATED_SUCCESS = "EMPLOYEE_CREATED_SUCCESS";
export const EMPLOYEE_CREATED_FAILURE = "EMPLOYEE_CREATED_FAILURE";

export const EMPLOYEE_DELETED_SUCCESS = "EMPLOYEE_DELETED_SUCCESS";
export const EMPLOYEE_DELETED_FAILURE = "EMPLOYEE_DELETED_FAILURE";

export const UPDATE_EMPLOYEE_SUCCESS = "UPDATE_EMPLOYEE_SUCCESS";
export const UPDATE_EMPLOYEE_FAILURE = "UPDATE_EMPLOYEE_FAILURE";

export const getEmployees = () => ({ type: GET_EMPLOYEES });

export const getEmployeesSuccess = (employees) => ({
  type: GET_EMPLOYEES_SUCCESS,
  payload: employees,
});

export const getEmployeesFailure = (error) => ({
  type: GET_EMPLOYEES_FAILURE,
  payload: error,
});

export const fetchAllEmployees = () => {
  return async (dispatch) => {
    try {
      console.log(defaultFetchOptions, "default fetch options");
      const response = await fetch(
        "http://localhost:3001/employees",
        defaultFetchOptions
      );
      if (response.status === 200) {
        const employees = await response.json();
        dispatch(getEmployeesSuccess(employees));
      } else {
        dispatch(getEmployeesFailure(response.statusText));
        window.location.replace("/sign_in");
      }
    } catch (error) {
      dispatch(getEmployeesFailure(error));
    }
  };
};

export const getOneEmployee = () => ({ type: GET_ONE_EMPLOYEE });

export const getOneEmployeeSuccess = (employee) => ({
  type: GET_ONE_EMPLOYEE_SUCCESS,
  payload: employee,
});

export const getOneEmployeeFailure = (error) => ({
  type: GET_ONE_EMPLOYEE_FAILURE,
  payload: error,
});

export const fetchOneEmployee = (employee_id) => {
  return async (dispatch) => {
    try {
      const success = await fetch(
        `http://localhost:3001/employees/${employee_id}`,
        defaultFetchOptions
      );
      const employee = await success.json();
      dispatch(getOneEmployeeSuccess(employee));
    } catch (error) {
      dispatch(getOneEmployeeFailure(error));
    }
  };
};

export const employeeCreatedSuccess = (employee) => ({
  type: EMPLOYEE_CREATED_SUCCESS,
  payload: employee,
});

export const employeeCreatedFailure = (error) => ({
  type: EMPLOYEE_CREATED_FAILURE,
  payload: error,
});

export const fetchPostNewEmployee = (new_employee) => {
  return async (dispatch) => {
    try {
      const success = await fetch("http://localhost:3001/employees", {
        ...defaultFetchOptions,
        method: "POST",
        body: JSON.stringify(new_employee),
      });
      const employee = await success.json();
      dispatch(employeeCreatedSuccess(employee));
    } catch (error) {
      dispatch(employeeCreatedFailure(error));
    }
  };
};

export const employeeDeletedSuccess = (employee) => ({
  type: EMPLOYEE_DELETED_SUCCESS,
  payload: employee,
});

export const employeeDeletedFailure = (error) => ({
  type: EMPLOYEE_DELETED_FAILURE,
  payload: error,
});

export const deleteOneEmployee = (employee_id) => {
  return async (dispatch) => {
    try {
      const success = await fetch(
        `http://localhost:3001/employees/${employee_id}`,
        {
          ...defaultFetchOptions,
          method: "DELETE",
        }
      );
      const employee = await success.json();
      dispatch(employeeDeletedSuccess(employee));
    } catch (error) {
      dispatch(employeeDeletedFailure(error));
    }
  };
};

export const updateEmployeeSuccess = (employee) => ({
  type: UPDATE_EMPLOYEE_SUCCESS,
  payload: employee,
});

export const updateEmployeeFailure = (error) => ({
  type: UPDATE_EMPLOYEE_FAILURE,
  payload: error,
});

export const updateEmployee = (employee) => {
  return async (dispatch) => {
    try {
      const success = await fetch(
        `http://localhost:3001/employees/${employee.id}`,
        {
          ...defaultFetchOptions,
          method: "PATCH",
          body: JSON.stringify(employee),
        }
      );
      const employee = await success.json();
      dispatch(updateEmployeeSuccess(employee));
    } catch (error) {
      dispatch(updateEmployeeFailure(error));
    }
  };
};

export const updateEmployeeLastInteraction = (employee_id) => {
  return async (dispatch) => {
    try {
      const success = await fetch(
        `http://localhost:3001/employees/${employee_id}`,
        {
          ...defaultFetchOptions,
          method: "PATCH",
          body: JSON.stringify({ last_interaction: new Date() }),
        }
      );
      const employee = await success.json();
      dispatch(updateEmployeeSuccess(employee));
    } catch (error) {
      dispatch(updateEmployeeFailure(error));
    }
  };
};
