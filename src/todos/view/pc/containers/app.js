

/**
 * Created by zhoulijun on 16/4/18.
 */
"use strict"

import React from "react";
import {Router,Route,browserHistory} from "react-router";
import {render} from "react-dom";
import Footer from "../components/footer.js";
import List from "../components/list.js";
import Form from "../components/form.js";

import {addTask,finishTask,getTaskList} from "model/actions.js";
import {ALL} from "model/filter_type.js";
import {connect} from "react-redux";


const App = React.createClass({
    componentDidMount(){
        this.props.dispatch(getTaskList());
    },
    render : function(){
        const {todos,loading,dispatch,errorMsg} = this.props;
        return (
            <div>
                <Form handleAdd={text=>dispatch(addTask(text))} />
                <List list={todos} handleFinishTask={id=>dispatch(finishTask(id))} />
                <Footer handleFilter={filterType=>dispatch(getTaskList(filterType))}/>
                {loading ? "loading..." : ""}
                {errorMsg ? errorMsg : ""}
            </div>
        )
    }
});

const filterTodos = function(todos,filter){
    if(filter === ALL){
        return todos;
    }
    return todos.filter(task => task.state === filter)
}

const selecter = function(state){
    return state
}

module.exports = connect(selecter)(App);
