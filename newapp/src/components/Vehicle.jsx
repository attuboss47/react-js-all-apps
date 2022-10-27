import React,{useState} from "react";

export const Vehicle=()=>{

    const [home,setHome]=useState("hello")

    return(
    <div className="main2">
        
        <h1>{home}
        <img width={"150px"} src={"Vehicle/" + home + ".jpg" } alt={home}/></h1>
        <button onClick={e=> setHome("Airplane")}>Airplane</button>
        <button onClick={e=> setHome("Bike")}>Bike</button>
        <button onClick={e=> setHome("Taxi")}>Taxi</button>
        <button onClick={e=> setHome("Train")}>Train</button>
        <button onClick={e=> setHome("Van")}>Van</button>
    </div>

    )
}