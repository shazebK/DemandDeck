import { InputAdornment, OutlinedInput } from "@mui/material";
import React from "react";
import { Search, Tune, Favorite, LocationOn } from "@mui/icons-material";
import Demandcard from "./DemandCard";
import DemandCard from "./DemandCard";

export default function DemandsPage() {
  return (
    <>
      <div class="px-4 flex justify-between items-center shadow-lg">
        <h2 class="text-2xl font-bold">1299 Demands</h2>
        <div class="flex justify-evenly items-center w-1/2">
          <OutlinedInput
            type="text"
            placeholder="Search"
            className="rounded-2xl w-4/5 my-2"
            startAdornment={
              <InputAdornment position="end">
                <Search />
              </InputAdornment>
            }
          />
            <Tune />
        </div>
        <Favorite fontSize="large"/>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center">
            <DemandCard></DemandCard>
            <DemandCard></DemandCard>
            <DemandCard></DemandCard>
            <DemandCard></DemandCard>
            <DemandCard></DemandCard>
      </div>
      
      
    </>
  );
}
