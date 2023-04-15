import React from "react";
import Header from "./Header";
import SearchBar from "./SearchBar";
import Plans from "./Plans";
import Footer from "./Footer";

function Help() {
  return (
    <div>
      {/* <Header /> */}
      <h1 className="text-center py-8 text-5xl">
        <strong>Hi!How can we help?</strong>
      </h1>

      <div className=" py-6 pl-[430px]">
        <SearchBar />
      </div>
      <Plans />
    </div>
  );
}

export default Help;
