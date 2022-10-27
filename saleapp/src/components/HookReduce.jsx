// import { Action } from "@remix-run/router"
// import React, { useReducer } from "react"



// export const initialState={
//     countOne:10,
//     countTwo:20
// }

// export const reducer=(state,action)=>{

// if(Action.type=="increment"){
//     return{...state,countOne:state.countOne+action.data}
// }
// }
// export const HookReduce=()=>{
//     const[count,dispatch]=useReducer(reducer,initialState)


//     return(

//         <div>
//             <h1>helloooooo</h1>
//             <h1>{count.countOne}</h1>
//             <button onClick={()=>dispatch({type:"increment",data:5})}>increase1</button>
//             <br />
//             <h1>{count.countTwo}</h1>
//             <button onClick={()=>dispatch({type:"increment",data:1})} >increase2</button>
//         </div>
//     )
// }