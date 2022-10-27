import React, { useContext } from "react"
import {SendData} from "./ContextBank"

export const ViewDetails=()=>{
    const recieved=useContext(SendData)
    console.log(recieved)

    return(
        <div>
            <h1>welcome to Viewdetails</h1>
            <h1>name:-{recieved.name}</h1>
                <h1>Account No:-{recieved.accountNo}</h1>
                <h1>Account Type:-{recieved.accountType}</h1>
                <h1>Account Balance:-{recieved.accountBalance}</h1>
                <h1>Account Balance:-{recieved.address.street},
                                     {recieved.address.area},
                                     {recieved.address.city},
                                     {recieved.address.pin}</h1>
                                     
                <h1>Mobile Number:-{recieved.contactNumber}</h1>
        </div>
    )
}