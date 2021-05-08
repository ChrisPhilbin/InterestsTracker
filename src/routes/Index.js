import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from '../static/Home'
import List from '../static/List'

const Routes = () => {
    return(
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/list" component={List} />
            </Switch>
        </Router>
    )
}

export default Routes