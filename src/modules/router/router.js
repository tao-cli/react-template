import {Switch, Route, Link } from 'react-router-dom';
import React from "react";
import { render } from "react-dom";

import Home from "../app/App.js"
class RouterIndex extends React.Component{
    render(){
        return <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/app" component={Home}/>
        </Switch>
    }
}

export default RouterIndex;
