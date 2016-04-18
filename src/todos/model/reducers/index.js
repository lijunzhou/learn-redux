/**
 * Created by zhoulijun on 16/4/18.
 */
"use strict";

import initState from "../initstate.js";
import todos from "./todos.js";
import filterType from "./filter_type.js";
import { combineReducers } from 'redux';

module.exports = function(state = initState,action = {}){
    return {
        todos : todos(state.todos,action),
        filterType : filterType(state.filterType,action)
    }
}
//
//module.exports = combineReducers({
//    todos,
//    filterType
//})