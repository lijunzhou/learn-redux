/**
 * Created by zhoulijun on 16/4/18.
 */
"use strict"

const ACTION_ADD_TASK = "add_task",
      ACTION_FINISH_TASK = "finish_task",
      ACTION_FILTER = "filter";


module.exports = {
    ACTION_ADD_TASK : ACTION_ADD_TASK,
    ACTION_FINISH_TASK : ACTION_FINISH_TASK,
    ACTION_FILTER : ACTION_FILTER,
    addTask : function Add(text){
        return {
            type : ACTION_ADD_TASK,
            text : text
        }
    },
    finishTask : function(id){
        return {
            type : ACTION_FINISH_TASK,
            id : id
        }
    },
    filter : function(filterType){
        return {
            type : ACTION_FILTER,
            filter : filterType
        }
    }
}