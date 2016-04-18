/**
 * Created by zhoulijun on 16/4/18.
 */
"use strict"

import {createStore} from "redux";
import reducers from "./reducers";

module.exports = ()=>createStore(reducers);
