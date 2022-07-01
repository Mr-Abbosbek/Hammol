import React, { useEffect, useState } from "react";
import { TextField, MenuItem } from '@mui/material';
import GetServiceApi from "../../../API/useApi";

function SelectCategory(props) {
  const [currencies, setCurrencies] = useState([]);
  useEffect(() => {
    GetServiceApi.getCategory().then((res) => {
      setCurrencies(res.data);
    });
  }, []);

  return (
    <TextField
      id="standard-select-currency"
      select
      value={props.category}
      onChange={(e) => props.setCategory(e.target.value)}
      variant="standard"
      label="Category"
      className="w-50"
    >
    <MenuItem value="All">All</MenuItem>
      {currencies.map((item) => (
        <MenuItem key={item} value={item} className="px-3">
          {item}
        </MenuItem>
      ))}
    </TextField>
  );
}

export default SelectCategory;
