import React from "react";
import TestNav from "../UI/TestNav";
import { Poppins } from "next/font/google";
import Footer from "../LandingPage/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});

const Layout = ({ children }) => {
  return (
    <div className={`min-h-screen bg-white ${poppins.className}`}>
      {/* <Navbar /> */}
      <TestNav />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
