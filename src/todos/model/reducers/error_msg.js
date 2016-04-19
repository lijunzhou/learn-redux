/**
 * Created by zhoulijun on 16/4/19.
 */
"use strict"
import {ACTION_REQUEST_ERROR} from "../actions.js";

module.exports = function(errorMsg,action){
    switch (action.type){
        case ACTION_REQUEST_ERROR : {
            return action.msg;
        }
            default : return errorMsg;
    }
}