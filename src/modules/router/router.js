import {Switch, Route, } from 'react-router-dom';
import React from "react";

import Home from "../home/index";
import TickToe from '../tickToe/containers/TickToe';
class RouterIndex extends React.Component{
    render(){
        return <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/app" component={Home}/>
            <Route path="/ticktoe" component={TickToe}/>
        </Switch>
    }
}

export default RouterIndex;