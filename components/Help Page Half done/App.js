import React from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Footer from './components/Footer';
import Plans from './components/Plans';

function App() {
  return (
    <div>
      <Header />
      <h1 className="text-center py-8 text-5xl">
        <strong>Hi!How can we help?</strong>
      </h1>
      
      <div className=" py-6 pl-[430px]">
        <SearchBar />
      </div>
      <Plans />
      <Footer/>
    </div>
  );
}

export default App;
