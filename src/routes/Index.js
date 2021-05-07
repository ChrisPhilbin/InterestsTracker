import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from '../static/Home'
import Build from '../components/Build'

const Routes = () => {
    return(
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/build" component={Build} />
            </Switch>
        </Router>
    )
}

export default Routes