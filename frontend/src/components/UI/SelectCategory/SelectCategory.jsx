import React, { useEffect, useState } from "react";
import { TextField, MenuItem } from '@mui/material';
import { FormControl, InputLabel, NativeSelect } from "@mui/material";
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
    // <FormControl fullWidth className="w-50">
    //   <InputLabel variant="standard" htmlFor="select">
    //     Category
    //   </InputLabel>
    //   <NativeSelect
    //     id="select"
    //     value={props.category}
    //     onChange={(e) => props.setCategory(e.target.value)}
    //     className="mb-3"
        
    //   >
    //     <option value="All">All</option>
    //     {currencies.map((item) => (
    //       <option
    //         key={item}
    //         value={item}
    //         className="_option"
    //       >
    //         {item}
    //       </option>
    //     ))}
    //   </NativeSelect>
    // </FormControl>
  );
}

export default SelectCategory;
