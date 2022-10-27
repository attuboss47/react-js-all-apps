import React, { useState } from "react";

export const Vehicle=()=>{
    const[name,setName]=useState("hello")
    return(
        <div className="sub">
            <h1>name</h1>
            <img src={"Vehicle/"+name+".jpg"} alt={name} />
            <button onClick={e=>setName("Airplane")}>Airplane</button>
            <button onClick={e=>setName("Bike")}>Bike</button>
            <button onClick={e=>setName("Taxi")}>taxi</button>
        

        </div>
    )
}