

/**
 * Created by zhoulijun on 16/4/18.
 */
"use strict"

import React from "react";
import {Router,Route,browserHistory} from "react-router";
import {render} from "react-dom";
import Test from "./../../../model/test.js";
import Footer from "../components/footer.js";
import List from "../components/list.js";
import Form from "../components/form.js";

import {addTask,finishTask,filter} from "../../../model/actions.js";
import {ALL} from "../../../model/filter_type.js";
import {connect} from "react-redux";


const App = React.createClass({
    render : function(){
        const {todos,filterType,dispatch} = this.props;
        return (
            <div>
                <Footer handleFilter={filterType=>dispatch(filter(filterType))}/>
                <List list={todos} handleFinishTask={id=>dispatch(finishTask(id))} />
                <Form handleAdd={text=>dispatch(addTask(text))} />
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
    return {
        filterType : state.filterType,
        todos : filterTodos(state.todos,state.filterType)
    }
}

module.exports = connect(selecter)(App);
