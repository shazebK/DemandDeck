import React from "react";
import Navbar from "../UI/Navbar";
import {Poppins} from "next/font/google";

const poppins = Poppins({
  subsets: ['latin'],
  weight:['400']
});

const Layout = ({ children }) => {
  return (
    <div className={`min-h-screen bg-white ${poppins.className}`}>
      <Navbar />
      <main>
      {children}
      </main>
    </div>
  );
};

export default Layout;
