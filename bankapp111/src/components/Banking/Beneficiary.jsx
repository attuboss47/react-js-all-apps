// import React,{useState,useEffect} from "react"
// import { Card,CardContent } from "@mui/material"
// import  {AddBenef} from "./AddBenef"
// import axios from "axios"

// export const Beneficiary=()=>{
//     const[accTypeOptions,setAccTypeOptions]=useState([])


//     const getData=async()=>{
//         const result= await axios.get("http://localhost:7500/acctype")
//         setAccTypeOptions(result.data)
//     }

//     useEffect(()=>{
//         getData()
//     },[])


//     return(
//         <React.Fragment>
//             <Card>
//                 <CardContent>
//                 <AddBenef  accTypeOptions={accTypeOptions}/>
//                 </CardContent>
//             </Card>
        
           
//         </React.Fragment>
//     )
// }

import { Card, CardContent } from "@mui/material";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { AddBenef } from "./AddBenef";

export const Beneficiary = () => {
  const [acctyOptions, setAcctypeOption] = useState([]);
  const getData = async () => {
    const result =await axios.get("http://localhost:7500/accounttypes");
    setAcctypeOption(result.data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <React.Fragment>
      <h3>Beneficiary Home</h3>
      <Card className="main">
        <CardContent>
          <AddBenef acctyOptions={acctyOptions} />
        </CardContent>
      </Card>
    </React.Fragment>
  );
};