// import React, { useEffect, useState }  from "react"
// import { Grid,TextField,Button } from "@mui/material"
// import Select from "react-select"
// export const AddBenef=({accTypeOptions})=>{

//     const [accNo,setAccNo]=useState(11117)
//     const [refAccNo,setRefAccNo]=useState(5505)
//     const [accType,setAccType]=useState({})
//     const [name,setName]=useState("")
//     const [limit,setLimit]=useState(1001)
//     const [isActive]=useState(true)
//     const [isValid,setisValid]=useState(false)

//     useEffect(()=>{
//     accNo && name && limit>1000 && accType ?   setisValid(true):setisValid(false)
//     },[accNo,name,limit,accType])
    

//     const handleClear=()=>{
//         setAccNo("")
//         setName("")
//         setLimit("")
//     }

//     return(
//             <React.Fragment>
//                 <Grid conatainer spacing={2}>
//                     <Grid item xs={4}>
//                         <TextField  label="Beneficiary Account Number" value={accNo} variant="contained" onChange={(e)=>setAccNo(e.target.value)} fullWidth  />

//                     </Grid>

                    
//                     <Grid item xs={4}>
//                         <Select  options={accTypeOptions}  value={accTypeOptions} onChange={(val)=>setAccType(val)} placeholder={"hello"} />
//                     </Grid>

//                     <Grid item xs={4}>
//                         <TextField label="beneficiary name" value={name} onChange={(e)=>setName(e.target.value)}  variant="contained" fullWidth  />

//                     </Grid>

//                     <Grid item xs={4}>
//                         <TextField label="beneficiary max limit" type="number" value={limit} onChange={(e)=>setLimit(e.target.value)}  variant="contained" fullWidth  />

//                     </Grid>

//                     <Grid item xs={4}>
//                         <Button  variant="contained" >Add</Button>

//                     </Grid>

//                     <Grid item xs={4}>
//                         {/* <TextField  label="beneficiary name" variant="standard" fullWidth  /> */}
//                         <Button disable={!isValid } onClick={handleClear} variant="contained" >clear</Button>

//                     </Grid>

//                 </Grid>
//             </React.Fragment>
//     )
// }








import { Button, Grid, TextField, Alert } from "@mui/material";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Select from "react-select"


export const AddBenef = ({ acctyOptions }) => {
  const [accNo, setAccNo] = useState(11114);
  const [refAccNo, setRefAccNo] = useState(876786677);
  const [accType, setAccType] = useState({});
  const [name, setName] = useState("");
  const [limit, setLimit] = useState(1000);
  const [isValid, setIsValid] = useState(false);
  const [msg, setMsg] = useState("");
  const [isActive] = useState(true);

  const handleAddBenef = async () => {
    setTimeout(() => {
      setMsg("");
    }, 2000);
    const payload = {
      accNo,
      name,
      accType: accType.value,
      refAccNo,
      isActive,
      limit,
    };
    const result = await axios.post("http://localhost:7500/addbenefs", payload);
    result.status === 200 && setMsg(result.data);
    result.status === 200 && handleClear();
  };
  const handleClear = () => {
    setAccNo("");
    setName("");
    setLimit();
    setAccType({});
    setIsValid("");
  };
  useEffect(() => {}, [msg]);
  useEffect(() => {
    accNo && name && limit >= 1000 && accType
      ? setIsValid(true)
      : setIsValid(false);
  }, [accNo, name,limit, accType]);
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <TextField
            value={accNo}
            label="Beneficiary Account Number"
            variant="outlined"
            type="number"
            fullWidth
            onChange={(e) => setAccNo(e.target.value)}
          />
        </Grid>
        {/* <Grid item xs={4}>
          <Select
            options={acctyOptions}
            value={accType}
            placeholder="Select Account Type"
            onChange={(val) => setAccType(val)}
          />
        </Grid> */}
        <Grid item xs={4}>
          <TextField
            value={name}
            label="Beneficiary  Name"
            variant="outlined"
            fullWidth
            onChange={(e) => setName(e.target.value)}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="Beneficiary Max Limit"
            variant="outlined"
            fullWidth
            type="number"
            onChange={(e) => setLimit(e.target.value)}
          />
        </Grid>
        <Grid item xs={4}>
          <Button
            color="success"
            variant="contained"
            fullWidth
            disabled={!isValid}
            onClick={handleAddBenef}
          >
            Add Beneficiary
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button
            color="error"
            variant="contained"
            fullWidth
            onClick={handleClear}
          >
            Clear
          </Button>
        </Grid>
        <Grid item xs={8}></Grid>
        <Grid item xs={4}>
          {msg && <Alert serverity="Success">{msg}</Alert>}
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Button variant="contained" fullWidth color="primary" >Submit</Button>
        </Grid>
        <Grid item xs={6}>
          <Button variant="contained" fullWidth color="primary" >Cancel</Button>
        </Grid>

      </Grid>
    </React.Fragment>
  );
};