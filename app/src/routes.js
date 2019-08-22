import React from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom'

import LoginPage from './pages/LoginPage'
import ListPage from "./pages/ListPage";

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={LoginPage} />
            <Route path="/list" component={ListPage} />
        </Switch>
    </BrowserRouter>
);

export default Routes;