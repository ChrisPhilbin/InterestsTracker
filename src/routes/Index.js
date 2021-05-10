import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from '../static/Home'
import EmployeeList from '../static/EmployeeList'
import EmployeeDetails from '../components/employees/EmployeeDetails'

const Routes = () => {
    return(
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/employees" component={EmployeeList} />
                <Route exact path="/employees/:employee_id" component={EmployeeDetails} />
            </Switch>
        </Router>
    )
}

export default Routes