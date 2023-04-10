import { Favorite, LocationOn } from "@mui/icons-material";
import React from "react";

export default function DemandCard(){
return <div class="m-4 flex flex-col justify-start items-center border-2 rounded-[24px] w-2/3 h-[450px] shadow-lg">
        <div class="rounded-t-[24px] w-full h-1/2 bg-[#7000FF]">
          <div class="my-2 mr-2 text-white flex justify-end items-center">
            <Favorite/>
          </div>
          <div class="h-4/5 flex flex-col justify-center items-center">
            <h1 class="text-white text-[64px]">12459</h1>
            <h2 class="text-white text-[18px]">Supporters</h2>
          </div>
        </div>
      <div class="h-1/2 w-full py-6 flex flex-col justify-between items-center">
          <h2 class="font-bold text-[24px]">Laundary Services</h2>
          <div class="w-2/3 md:w-1/3 flex justify-between items-center">
            <h3 class="text-[30px] text-pink-600">12</h3>
            <h3 class="text-[20px]">Responses</h3>
          </div>
          <h2>Milk, Rent, Hostel, Advance</h2>
          <div class="flex justify-center items-center">
            <LocationOn/>
            <h2 class="text-gray-500 text-[14px]">6A/155 I.T. Crossing Faizabad Road Lucknow</h2>
          </div>
          </div>
      </div>
}