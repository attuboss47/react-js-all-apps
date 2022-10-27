import React from "react";
import { Articles } from "./Articles";
import { Todolist } from "./Todolist";

export const Home=()=>{
    return(
        <div className="main">
            {/* <Articles/> */}
            <Todolist/>
        </div>
    )
}