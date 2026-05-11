import React, {useState, useContext} from "react";
import Header from "../../header-footers/Header.jsx";
import { PartyContext } from "../../contexts/PartyContext.jsx";



const HomePage = () => {
  const {siteTemplate} = useContext(PartyContext)
  return (
    <>
    <Header/>
      <div className="main-content">
        <p>Home Page here
          <br/><br/>
        Party Status: {siteTemplate ? "In Template" : "Party Mode"}</p>
      </div>         
    </>
  )
}

export default HomePage
