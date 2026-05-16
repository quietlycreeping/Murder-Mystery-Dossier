/*=========================================================
 Author:     J. Orlando
 Date:       May 2026
 Description: Murder mystery header component
==========================================================*/
import { Link } from "react-router-dom";
import React, {useState, useContext} from "react";
//======Contexts===========================
//import { UserContext } from "../contexts/UserContext";
//======Components=========================


  
const Header = () =>   
{
  //const {loggedIn, userCharacter} = useContext(UserContext);
  
  return (
    <>
    <div id="header">
        <nav>
          <button><Link to="/"> Home </Link></button>
          <button><Link to="/tasks"> Tasks </Link></button>
          <button><Link to="/evidence"> Evidence </Link></button>

          {/* Button either leads to login or a the user's character 
          {loggedIn ? 
          <button><Link to="/profile"> Profile </Link></button> : */}
          <button><Link to="/login"> Login </Link></button>

          <button><Link to="/admin-home"> Admin </Link></button> 
        </nav>
    </div>
    </>
  )
}

export default Header
