import React from "react";
import {useDispatch} from "react-redux"
import {Grid, Button} from "@mui/material"
import AccountSummary from "./Banking/AccountSummary";

export const Home=()=>{
    const dispatch = useDispatch()

    const handelVazir= ()=>{
        dispatch({
            type:"accinfo",
            payload:{
                accNo:5005
            }
        })
    }
    const handelAmit=()=>{
        dispatch({
            type:"accinfo",
            payload:{
                accNo: 5006
            }
        })
    }

//    const handelAzhar=()=>{
//     dispatch({

//     })
//    }

    return(
        <React.Fragment>
           <Grid container spacing={3}>
            <Grid item xs={6}>Account Summary
            <AccountSummary/>
            </Grid>
            <Grid item xs={6}>Loan Summary</Grid>
            {/* <Grid item xs={6}>Loan Summary </Grid> */}
            <Grid item xs ={6}>
                <Button variant="contained" onClick={handelVazir}>Vazir Acc Info</Button>
                <Button variant="contained" onClick={handelAmit}>Amit Acc Info</Button>
            </Grid>
            {/* <Grid item xs={1}>
                <Button onClick={handelAzhar}>azhar</Button>
                <Button onClick={handelinamul}>inamul</Button>
                <Button onClick={handeladib}>adib</Button>
                <Button onClick={handelalim}>alim</Button>
                <Button onClick={handelsohel}>sohel</Button>
                <Button onclick={handelshoib}>shoib</Button>
                <Button onClick={handelwaseem}>waseem</Button>
                <Button onClick={handeladnan}>adana</Button>
                <Button onClick={handelArbaz}>arbaz</Button>
                <Button onClick={handelsanish}>danish</Button>
            </Grid> */}
           </Grid>
        </React.Fragment>
    )
}