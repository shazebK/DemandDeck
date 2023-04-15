import React from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Footer from './components/Footer';
import MapItem from "./components/Mapper/MapItem";

const city=[["Mumbai",["farm","poulty"]],["Delhi",["milk"]]];

function App() {
  return (
    <div>
      <Header />
      <h1 className="text-center py-6 text-6xl">
        <strong>Need any suggestions?</strong>
      </h1>
      <div className="py-4">
        <h1 className="pl-12 py-2 text-2xl">Enter Locations:</h1>
      </div>
      <div className=" ml-12 px:auto">
        <SearchBar />
        <span className="text-xs">Insert tags related to your idea and press Enter</span>
      </div>
      <div className="py-10 pl-12">
        <p>Here we get the fetched data from our database</p>
      </div>
      <div>
        <h1 className="pl-12">Here the tags from database will be displayed!</h1>
        <div className="block pl-12 ">
        <div>
          {city.map((el) => <MapItem item={el} />)}
            
        </div>
          </div>  
      </div>
      <Footer/>
    </div>
  );
}

export default App;
