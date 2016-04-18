/**
 * Created by zhoulijun on 16/4/18.
 */
"use strict"

import {ACTIVE} from "./task_state.js";
import {ALL} from "./filter_type.js";

module.exports = {
    todos : [
        {
            id : 1,
            text : "learn react and redux",
            state : ACTIVE
        }
    ],
    filterType : ALL
}