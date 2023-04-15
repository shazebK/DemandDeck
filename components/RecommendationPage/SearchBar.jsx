import { InputAdornment, OutlinedInput } from "@mui/material";
import React, { useState } from "react";
import { Search, Tune, Favorite, LocationOn } from "@mui/icons-material";

export default function () {
  return (
    <div>
        <OutlinedInput 
            type="text"
            placeholder="Search"
            className="rounded w-[400px] h-12 text-red"
            startAdornment={
              <InputAdornment position="end">
                <Search />
              </InputAdornment>
            }
          />
    </div>
  );
}
