import React from "react";
import{Vehicles}from "./Vehicles"
import{Vehicle}from "./Vehicle"
import{Vegatable}from "./Vegatable"
import{Fruite}from "./Fruite"
import{Artical}from "./Artical"
import{Text} from "./Text"

export const Home=()=>{
    return(
        <div className="main1">
            <h1>This Is My Home Page</h1>
        <Text/>
        <Vehicles/>
        <Artical/>
        <Vehicle/>
        <Vegatable/>
        <Fruite/>
        </div>
    )
}