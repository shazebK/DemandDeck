import { InputAdornment, OutlinedInput } from "@mui/material";
import React, { useState } from "react";
import { Search, Tune, Favorite, LocationOn } from "@mui/icons-material";

export default function () {
  const [searchText, setSearchText] = useState("");
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      performSearch();
    }
  };

  const performSearch = () => {
    // perform your search logic here
    console.log(`Searching for ${searchText}`);
  };
  return (
    <div>
      <OutlinedInput
        type="text"
        placeholder="Search"
        className="rounded w-3/5 h-12 text-red"
        startAdornment={
          <InputAdornment position="end">
            <Search />
          </InputAdornment>
        }
        onChange={(event) => setSearchText(event.target.value)}
        onKeyPress={handleKeyPress}
      />
    </div>
  );
}
