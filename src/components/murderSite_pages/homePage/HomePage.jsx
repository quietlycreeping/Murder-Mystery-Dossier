/*=========================================================
 Author:     J. Orlando
 Date:       May 2026
 Description: Murder Mystery Home page with various components
==========================================================*/
import { useContext } from "react";
//======Contexts===========================
import { PartyContext } from "../../contexts/PartyContext.jsx";
//======Components===========================
import Header from "../../header-footers/Header.jsx";

const HomePage = () => {
  const {siteTemplate} = useContext(PartyContext);

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
