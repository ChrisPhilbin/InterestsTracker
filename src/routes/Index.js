import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from '../static/Home'
import EmployeeList from '../static/EmployeeList'
import EmployeeDetails from '../components/employees/EmployeeDetails'
import TopNav from '../navigation/TopNav'
import CreateEmployee from '../components/employees/CreateEmployee'
import EditEmployee from '../components/employees/EditEmployee'

const Routes = () => {
    return(
        <Router>
            <TopNav />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/employees" component={EmployeeList} />
                <Route exact path="/employees/new" component={CreateEmployee} />
                <Route exact path="/employees/:employee_id" component={EmployeeDetails} />
                <Route exact path="/employees/:employee_id/edit" component={EditEmployee} />
                {/* <Route exact path="/employees/:employee_id" render={(props) => <EmployeeDetails {...props}/>} /> */}
            </Switch>
        </Router>
    )
}

export default Routes