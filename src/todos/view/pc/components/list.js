/**
 * Created by zhoulijun on 16/4/18.
 */
"use strict"

import React from "react";
import {FINISHED} from "model/task_state.js";


const Item = React.createClass({
    render : function(){
        const checked = this.props.task.state === FINISHED ? "checked" : "";
        const style = {"textDecoration" : checked ? "line-through" : "none"};
        return (<li>
            <input checked={checked} type="checkbox" onClick={()=>this.props.handleFinishTask(this.props.task.id)} />
            <span style={style}>{this.props.task.text}</span>
        </li>)
    }
})

module.exports = React.createClass({
    render : function(){
        return (<ul>
            {
                this.props.list.map(function(task){
                    return <Item key={task.id + ""} task={task} {...this.props} />
                }.bind(this))
            }
        </ul>)
    }
})