import { InputAdornment, OutlinedInput } from "@mui/material";
import React, { useState } from "react";
import { Search, Tune, Favorite, LocationOn } from "@mui/icons-material";
import DemandCard from "./DemandCard";

export default function DemandsPage() {
  return (
    <>
      <div className="py-2 px-4 flex justify-between items-center shadow-lg">
        <div className="flex"> 
         <h2 className="font-semibold  text-[18px] md:text-[24px]">1299</h2>
         <h2 className="hidden ml-2 md:block font-semibold text-[24px]">Demands</h2>
        </div>
        <div className="flex justify-evenly items-center w-4/5 md:w-1/2">
          <OutlinedInput
            type="text"
            placeholder="Search"
            className="rounded-2xl w-4/5 h-12"
            startAdornment={
              <InputAdornment position="end">
                <Search />
              </InputAdornment>
            }
          />
            <div className = "h-full flex items-center justify-between">
            <h1 className="hidden md:block text-[20px] mr-4">Filter</h1>
            <Tune className = "cursor-pointer" />
            </div>
        </div>
        <h2 className="hidden md:block text-[20px] cursor-pointer">Favorites</h2>
        <Favorite className = "md:hidden"/>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center px-4">
            <DemandCard></DemandCard>
            <DemandCard></DemandCard>
            <DemandCard></DemandCard>
            <DemandCard></DemandCard>
            <DemandCard></DemandCard>
      </div>
      
      
    </>
  );
}
