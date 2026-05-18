/*=========================================================
 Author:     J. Orlando
 Date:       May 2026
 Description: Murder mystery header component
==========================================================*/
import { Link } from "react-router-dom";
import { useContext } from "react";
//======Contexts===========================
import { PartyContext } from "../contexts/PartyContext";
//======Components=========================

/*=========================================================
 States       | Header links have access to... 
 ═════════════════════════════════════════════════════════
 Template     │  Home, Profile, Tasks, Evidence, Admin   
 ────────────────────────────────────────────────────────
 Pre-Party    │  Home, Profile/Logon  
 ────────────────────────────────────────────────────────
 Pre-Murder   │  Home, Profile/Logon, Tasks   
 ────────────────────────────────────────────────────────
 Post-Murder  │  Home, Profile/Logon, Tasks, Evidence      
============================================================*/
  
const Header = () =>   
{  
  const {siteTemplate, isMystery, isMurder} = useContext(PartyContext)
  
  return (
    <>
    <div id="header">
        <nav>
          <button><Link to="/"> Home </Link></button>
          <button><Link to="/tasks"> Tasks </Link></button>
          <button><Link to="/evidence"> Evidence </Link></button>

          <button><Link to="/login"> Login </Link></button>

          <button><Link to="/admin-home"> Admin </Link></button> 
        </nav>
    </div>
    </>
  )
}

export default Header
