/**
 * Created by zhoulijun on 16/4/14.
 */
"use strict"

import React from "react";
import {render} from "react-dom";
import Hello from "./p1/Hello.js";
import Test from "./todos/model/test.js";
import TodosMoblie from "./todos/view/mobile";
import TodosPC from "./todos/view/pc";
import { Router, Route, browserHistory ,IndexRoute} from 'react-router';

render((
    <Router history={browserHistory}>
        <Route path="hello" component={Hello} />
        <Route path="todos/test" component={Test} />
        <Route path="todos" component={TodosPC} />
        <Route path="m/todos" component={TodosMoblie} />
    </Router>
),document.getElementById("content"));
