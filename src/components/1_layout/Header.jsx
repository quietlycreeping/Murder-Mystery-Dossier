import { useState, useContext } from "react"
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import "./header.css";

export const Header = () => {

  return (
    <>
      <div id="header">
        <nav>
        <Link to="/">Home</Link>
          <Link to="/admin">Admin</Link>
        </nav>
      </div>
    </>
  )
}

export default Header