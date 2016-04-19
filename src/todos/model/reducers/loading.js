/**
 * Created by zhoulijun on 16/4/18.
 */
"use strict";
import {ACTION_LOADING} from "../actions.js";

module.exports = function(loading,action){
    switch (action.type){
        case ACTION_LOADING : {
            return action.isOpen;
        }
            default : return loading;
    }
}