import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from '../static/Home'
import EmployeeList from '../static/EmployeeList'

const Routes = () => {
    return(
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/employee-list" component={EmployeeList} />
            </Switch>
        </Router>
    )
}

export default Routes