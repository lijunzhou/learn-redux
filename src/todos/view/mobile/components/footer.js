/**
 * Created by zhoulijun on 16/4/18.
 */
"use strict"

import React from "react";
import {ACTIVE,FINISHED,ALL} from "../../../model/filter_type.js";


module.exports = React.createClass({
    render : function(){
        return (
            <ul>
                <li onClick={()=>this.props.handleFilter(FINISHED)}>已完成</li>
                <li onClick={()=>this.props.handleFilter(ACTIVE)}>未完成</li>
                <li onClick={()=>this.props.handleFilter(ALL)}>全部</li>
            </ul>
        )
    }
})
