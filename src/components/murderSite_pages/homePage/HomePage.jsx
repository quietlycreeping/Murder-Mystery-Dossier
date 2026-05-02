import { Link } from "react-router-dom";
import React from 'react';
import Header from "../../header-footers/Header.jsx";
import PartyState from "../../../PartyState.jsx";

const HomePage = () => {
  return (
    <>
    <Header/>
      <div className="main-content">
        <p>Home Page here
          <br/><br/>
        Party Status: {PartyState}</p>
      </div>         
    </>
  )
}

export default HomePage
