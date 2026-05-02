import React from 'react';
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => 
{
  return (
    <>
    <div id="header">
        <nav>
          <button><Link to="/"> Home </Link></button>
          <button><Link to="/tasks"> Tasks </Link></button>
          <button><Link to="/evidence"> Evidence </Link></button>
          <button><Link to="/profile"> Profile </Link></button>
          <button><Link to="/admin-home"> Admin </Link></button> 
        </nav>
    </div>
    </>
  )
}

export default Header
