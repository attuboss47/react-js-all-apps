
import React, { useState } from "react"
import { Tabs,Tab } from "@mui/material"
import { ViewAccount } from "./ViewAccount"
import { ViewDetails } from "./ViewDetails"
import { AddAmount }   from "./AddAmount"

export const BankDashboard=()=>{
    const [val,setVal]=useState("Account")
    return(

        <div>
            <h1>Welcome to Bank</h1>
            
            <Tabs value={val} onChange={(e,val)=>setVal(val)} >
                <Tab value="Account" label="View Account"></Tab>
                <Tab value="Details" label="View Details"></Tab>
                <Tab value="Addamount" label="View Amount"></Tab>
            </Tabs>
            {val=="Account"  && <ViewAccount/>}
            {val=="Details"  && <ViewDetails/>}
            {val=="Addamount"   && <AddAmount/>}


        </div>
    )
}