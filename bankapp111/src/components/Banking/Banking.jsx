
import React, { useState } from "react"
import { Tabs,Tab } from "@mui/material"
import { Transaction } from "./Transaction"
import { Transfer } from "./Transfer"
import { Beneficiary } from "./Beneficiary"
import { AccountType } from "./AccountType"



export const Banking=()=>{
    const[selected,setSelected]=useState("transaction")

    return(
     <React.Fragment>                          
        <h1>Banking Home</h1>
        <br />
        <Tabs value={selected} onChange={(e,val)=>setSelected(val)}>
            <Tab value="transaction" label="Transaction"/>        
            <Tab value="tranfer" label="Transfer"/>        
            <Tab value="beneficiary" label="Beneficiary"/>        
            <Tab value="acctype" label="Account Type"/>        
        </Tabs>
        {selected==="transaction" && <Transaction/>}
        {selected==="tranfer" && <Transfer/>}
        {selected==="beneficiary" && <Beneficiary/>}
        {selected==="acctype" && <AccountType/>}
       </React.Fragment>
    )
}