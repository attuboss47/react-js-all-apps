import React,{useContext} from "react"
import {SendData} from "./ContextBank"

export const ViewAccount=()=>{
    const recieved=useContext(SendData)
    console.log(recieved)
    return(

        <div>
            <h1>Welcome to View account</h1>
            <div>
                <h1>name:-{recieved.name}</h1>
                <h1>Account No:-{recieved.accountNo}</h1>
                <h1>Account Type:-{recieved.accountType}</h1>
                <h1>Account Balance:-{recieved.accountBalance}</h1>
                <h1>Mobile Number:-{recieved.contactNumber}</h1>
                
            </div>
            
        </div>
    )
}