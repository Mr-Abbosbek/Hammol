import { MenuItem, TextField } from "@mui/material";
import React from "react";

function Select(props) {
  const currencies = [
    {
      id: 1,
      title: "3",
      value: 3,
    },
    {
      id: 2,
      title: "5",
      value: 5,
    },
    {
      id: 3,
      title: "6",
      value: 6,
    },
    {
      id: 4,
      title: "10",
      value: 10,
    },
    {
      id: 5,
      title: "15",
      value: 15,
    },
  ];

  return (
    <TextField
      id="standard-select-currency"
      select
      placeholder="page"
      value={props.limit}
      onChange={(e) => props.setLimit(e.target.value)}
      variant="standard"
      className="select_pagination"
    >
      {currencies.map((option) => (
        <MenuItem key={option.value} value={option.value} className="px-3">
          {option.title}
        </MenuItem>
      ))}
    </TextField>
  );
}

export default Select;
