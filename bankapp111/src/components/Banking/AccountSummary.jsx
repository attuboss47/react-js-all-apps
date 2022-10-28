import React, { useEffect, useState } from "react";
import axios from "axios";
import { Grid } from "@mui/material";
import { AccountSummaryItem } from "./AccountSummaryItem";

export const AccountSummary = () => {
  const [data, setdata] = useState([]);
  const getData = async () => {
    const payload = { accNo: 876786677 };
    const result = await axios.post("http://localhost:7500/balance", payload);
    setdata(result.data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <React.Fragment>
      <Grid container spacing={2}>
        <AccountSummaryItem item="Total Credits" />
        <AccountSummaryItem item="Total Debits" />
        <AccountSummaryItem item="Total Balance" />
        <AccountSummaryItem item={data.creditAmnt} />
        <AccountSummaryItem item={data.debitAmnt} />
        <AccountSummaryItem item={data.balance} />
      </Grid>
    </React.Fragment>
  );
};