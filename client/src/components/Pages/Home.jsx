import React from "react";
import Dashboard from "./Dashboard";
import Navbar from "../Navbar";


const Home = () => {
  return (
    <div className="app-container">
      <navbar className="navbar-container">
        <div className="navbar-internalmenu">
          <Navbar />
         
        </div>
      </navbar>
    </div>
  );
};

export default Home;
