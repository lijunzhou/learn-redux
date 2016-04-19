/**
 * Created by zhoulijun on 16/4/18.
 */
"use strict";
import {ACTION_ADD_TASK,ACTION_FINISH_TASK,ACTION_RECEIVE_DATA} from "../actions.js";
import {FINISHED,ACTIVE} from "../task_state.js";

module.exports = function(todos,action){
    switch (action.type){
        case ACTION_ADD_TASK : {
            const _new = todos.slice();
            _new.push({
                id : todos.length ? todos[todos.length - 1].id + 1 : 0,
                text : action.text,
                state : ACTIVE
            })
            return _new;
        }
        case ACTION_FINISH_TASK : {
            return todos.slice().map(function(task){
                if(task.id === action.id){
                    return Object.assign({},task,{
                        state : FINISHED
                    })
                };
                return task;
            })
        }
        case ACTION_RECEIVE_DATA : {
            return action.list;
        }
            default : return todos;
    }
}