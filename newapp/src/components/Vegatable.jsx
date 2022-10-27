import React,{useState} from "react";

export const Vegatable =()=>{

    const[home,setHome]=useState("hello")
    return(
        <div className="main2">
            <h1>{home}
            <img width={"150px"} src={"Vegatable/" +home+ ".jpg"} alt={home}/></h1>
            <button onClick={e=>setHome("Carrot")}>Carrot</button>
            <button onClick={e=>setHome("Chilli")}>Chilli</button>
            <button onClick={e=>setHome("Egplant")}>Egplant</button>
            <button onClick={e=>setHome("Garlic")}>Garlic</button>
            <button onClick={e=>setHome("Potato")}>Potato</button>

        </div>


    )
}