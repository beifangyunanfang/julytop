/**
 * Created by v_liukai01 on 2019/4/19.
 */

import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from '../pages/home';
import Detail from '../pages/detail';
import ReactHot from '../pages/react';

const Routes = () => (
    <Router>
        <div>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={Detail}/>
        </div>
    </Router>
)

export default Routes;


