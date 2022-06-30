import React from "react";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import FormControl from "@mui/material/FormControl";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";

function InputUi({ search, setSearch }) {
  return (
    <FormControl className="w-100" variant="standard">
      <InputLabel htmlFor="standard-adornment-password">
        Search product
      </InputLabel>
      <Input
        type="text"
        className="w-50 search-input"
        id="standard-adornment-password"
        value={search || ""}
        onChange={(e) => setSearch(e.target.value)}
        endAdornment={
          <InputAdornment position="end">
            {!search.length ? (
              <SearchIcon />
            ) : (
              <IconButton onClick={() => setSearch("")}>
                <CloseIcon />
              </IconButton>
            )}
          </InputAdornment>
        }
      />
    </FormControl>
  );
}

export default InputUi;
