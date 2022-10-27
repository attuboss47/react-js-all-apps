import React,{createContext} from "react"

import {BankDashboard} from "./BankDashboard"

export const SendData=createContext()
export const ContextBank=()=>{
    const account={

        name:"attuboss47",
        age:21,
        accountNo:9535009834,
        accountType:"Saving",
        accountBalance:20000000,
        address:{street:"lane no 15",
        area:"peer burhan",
        city:"nanded",
        pin:431605},
        contactNumber:9309150392
    }
    
    return(

        <div>
            <h1>Welcome to Bank</h1>
           
           <SendData.Provider value={account}>
           <BankDashboard/>
           </SendData.Provider>
        </div>
         
    )
}