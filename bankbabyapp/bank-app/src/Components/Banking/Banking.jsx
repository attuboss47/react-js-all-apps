import React, { useState } from "react"
import {AccountType} from "./AccountType"
import {Beneficiary} from "./Beneficiary"
import {Transaction} from "./Transaction"
import {Transfer} from "./Transfer"
import {Tabs,Tab} from "@mui/material"

export const Banking=()=>{

    const [selected, setSelected]=useState("transaction")
    return(
        <React.Fragment>
            <h2>Banking Home</h2>
            <Tabs value={selected} onChange={(e,val)=>setSelected(val)}>
                <Tab value="transaction" label="Transaction"/>
                <Tab value="transfer" label="Transfer"/>
                <Tab value="beneficiary" label="Benificiary"/>
                <Tab value="accounttype" label="Account Type"/>
            </Tabs>

                     {selected==="transaction" && <Transaction/>}
                     {selected==="transfer" && <Transfer/>}
                     {selected==="beneficiary" && <Beneficiary/>}
                     {selected==="accounttype" && <AccountType/>}

        </React.Fragment>
    )
}