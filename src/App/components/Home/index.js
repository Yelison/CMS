import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

import Testing from '../testPage';

const Home = () => {

    return (
        <Router>
            <Switch>
                <Route path="/testing" component={Testing}/>
            </Switch>
        </Router>
    )
};

export default Home;