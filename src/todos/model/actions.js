/**
 * Created by zhoulijun on 16/4/18.
 */
"use strict"
import ajax from "reqwest";

const ACTION_ADD_TASK = "add_task",
      ACTION_FINISH_TASK = "finish_task",
      ACTION_FILTER = "filter";

const ACTION_LOADING = "loading",
      ACTION_RECEIVE_DATA = "receive_data",
      ACTION_REQUEST_ERROR = "request_error";

const loading = function(isOpen){
    return {
        type : ACTION_LOADING,
        isOpen : isOpen
    }
},
requestError = function(msg){
    return {
        type : ACTION_REQUEST_ERROR,
        msg : msg
    }
},
receiveData = function(list){
    return {
        type : ACTION_RECEIVE_DATA,
        list : list
    }
};


module.exports = {
    ACTION_ADD_TASK : ACTION_ADD_TASK,
    ACTION_FINISH_TASK : ACTION_FINISH_TASK,
    ACTION_LOADING : ACTION_LOADING,
    ACTION_RECEIVE_DATA : ACTION_RECEIVE_DATA,
    ACTION_REQUEST_ERROR : ACTION_REQUEST_ERROR,

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
    getTaskList : function(){
        return function(dispatch){
            dispatch(loading(true));
            ajax({
                method : "get",
                url : "http://192.168.13.9/mockjsdata/7/getTaskList",
                data : null,
                type: 'json',
                contentType: 'application/json',
                crossOrigin: false,
                success : function(data){
                    if(data.code > -1){
                        dispatch(requestError());
                        dispatch(receiveData(data.data));
                    }else{
                        dispatch(requestError("获取数据数据发生错误,错误代码:" + data.code));
                    }
                },
                complete : ()=>dispatch(loading(false))
            });
        }
    },

}