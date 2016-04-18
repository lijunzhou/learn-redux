/**
 * Created by zhoulijun on 16/4/18.
 */
"use strict"

import React from "react";

module.exports = React.createClass({
    handleClickBtn : function(){
        const text = this.refs.text.value.trim();
        this.props.handleAdd(text);
        this.refs.text.value = "";
    },
    render : function(){
        return (<div>
            <input ref="text" />
            <button onClick={this.handleClickBtn} >增加</button>
        </div>)
    }
})
