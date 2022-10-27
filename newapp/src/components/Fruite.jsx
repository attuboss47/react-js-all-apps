import React,{useState} from "react";

export const Fruite=()=>{
    const [home,setHome]=useState("hello")
    return(
        <div className="main2">
            <h1>hello
            <img width={"150px"} src={"fruite/"+home+ ".jpg"} alt={"home"} /></h1>
            <button onClick={e=>setHome("Apple")}>Apple</button>
            <button onClick={e=>setHome("Banana")}>Banana</button>
            <button onClick={e=>setHome("Kivi")}>Kivi</button>
            <button onClick={e=>setHome("Mango")}>Mango</button>
            <button onClick={e=>setHome("Orange")}>Orange</button>
        </div>
    )
}