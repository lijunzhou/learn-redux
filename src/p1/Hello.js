/**
 * Created by zhoulijun on 16/4/14.
 */
"use strict"

import React from "react";
import {createStore} from "redux";



const changeNameAction = function(name){
    return {
        type : "changeName",
        name : name
    }
}

const changeName = function(state = {name : "zhoulijun"},action = {}){
    switch (action.type){
        case "changeName" :
            return Object.assign({}, state, {
                name: action.name
            });
    }
    return state;
}

const store = createStore(changeName);

console.log(store.getState());

let unsubscribe = store.subscribe(()=> console.log(store.getState()));
store.dispatch(changeNameAction("chonglou"))

unsubscribe();
module.exports = React.createClass({
    render : function(){
        return (<div>hellow</div>)
    }
})