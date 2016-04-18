/**
 * Created by zhoulijun on 16/4/18.
 */
"use strict";
import {ACTION_FILTER} from "../actions.js";
import {ALL} from "../filter_type.js";

module.exports = function(filterType,action){
    switch (action.type){
        case ACTION_FILTER : {
            return action.filter;
        }
            default : return filterType;
    }
}