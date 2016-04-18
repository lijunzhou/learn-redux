/**
 * Created by zhoulijun on 16/4/18.
 */
"use strict"
import createStore from "./config_store.js";
import {addTask,finishTask,filter} from "./actions.js";
import React from "react";

const store = createStore();
console.log(store.getState());
const unsubscribe = store.subscribe(function(){
    console.log(store.getState())
});

store.dispatch(addTask("学习js"));
store.dispatch(addTask("看电影"));
store.dispatch(addTask("打游戏"));
store.dispatch(finishTask(1));
store.dispatch(finishTask(2));

unsubscribe();

module.exports = React.createClass({
    render : ()=> <div>test</div>
})