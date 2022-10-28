
// import React, { useState,useEffect } from "react"
// import { Grid,Card,CardContent,TextField,Button } from "@mui/material"
// import Select from "react-select"
// import axios from "axios"

// export const Transaction=()=>{

//     const[tranOptions,setTranOptions]=useState([])
//     const [accNo,setAccNo]=useState(876786677);
//     const [accType,setAccType]=useState("5")
//     const [amnt,setAmnt]=useState(0)
//     const [trasType,setTrasType]=useState("D")
//     const [isValid,setIsValid]=useState(false)
    
//     const haandleSubmit=()=>{
//         const payload={
//             accNo,
//             accType,
//             amnt,
//             trasType,
//         }
//         axios.post("http://localhost:7500")
//     }

//     const getData=async ()=>{
//         const result=await axios.get("http://localhost:7500/transTypes")
//         setTranOptions(result.data)
//     }
//     useEffect(()=>{
//         getData()
//     },[])

//     return(

//     <React.Fragment>
    
//     <Card>
//         <CardContent>
//             <Grid conatainer spacing={2}>
//                 <Grid item xs={4}>Type:-{" "}</Grid>

//                 <Grid item xs={8}>
//                 <Select options={tranOptions}/>
//                 </Grid>

//                 <Grid item xs={4}></Grid>

//                 <Grid item xs={8}>
//                     <TextField label="Amount" variant="standard" fullWidth />

//                 </Grid>
//                 <Grid item xs={6}>
//                <Button variant="contained" fullWidth >Submint</Button>
//                 </Grid>
//                 <br />
//                 <Grid item xs={6}>
//               <Button variant="contained" fullWidth>Cancel</Button>
//                 </Grid>
//             </Grid>
//         </CardContent>
//     </Card>
//     </React.Fragment>
//     )
// }


import React, { useState, useEffect } from "react";
import Select from "react-select";
import axios from "axios";
import { Grid, Card, CardContent, TextField, Button } from "@mui/material";
import { AccountSummary } from "./AccountSummary";

export const Transaction = () => {
  const [tranOption, setTranOption] = useState([]);
  const [accNo, setAccNo] = useState(876786677);
  const [accType, setAccType] = useState("C");
  const [amnt, setAmnt] = useState(0);
  const [trasType, setTrasType] = useState("D");
  const [isvalid, setvalid] = useState(false);
  const handleSubmit = () => {
    alert(" Your Transaction has been Successfully")
    const payload = {
      accNo,
      accType,
      amnt,
      trasType,
    };
    axios.post("http://localhost:7500/transaction", payload);
    setAmnt(0);
  };
  const handleCancel=()=>{
    alert("Cancel Your Transaction")
    setAmnt("")
  }
  const getData = async () => {
    const result = await axios.get("http://localhost:7500/transactiontypes");
    setTranOption(result.data);
  };
  useEffect(() => {
    if (amnt > 0) {
      setvalid(true);
    } else {
      setvalid(false);
    }
    
  }, [amnt]);
  useEffect(() => {
    getData();
  }, []);
  return (
    <React.Fragment>
      <h3>Transaction</h3>
      <Card className="cards" >
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <AccountSummary/>
            </Grid>
            <Grid item xs={4}>
              type:
            </Grid>
            <Grid item xs={8}>
              <Select
                options={tranOption}
                onChange={(val) => setTrasType(val.value)}
              />
            </Grid>
            <Grid item xs={4}>
              Amount:
            </Grid>
            <Grid item xs={8}>
              <TextField
                label="Amount"
                value={amnt}
                variant="standard"
                onChange={(e) => setAmnt(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <Button
                variant="contained"
                disabled={!isvalid}
                fullWidth
                color="success"
                onClick={handleSubmit}
              >
                SUBMIT
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button variant="contained"  color="error" fullWidth onClick={handleCancel}>
                CANCEL
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </React.Fragment>
  );
};