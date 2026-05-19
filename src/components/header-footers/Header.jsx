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
  
const Links = () =>   
{  
  const {siteTemplate, isMystery, isMurder} = useContext(PartyContext)
    return (
    <>
          <button><Link to="/"> Home </Link></button>

          {(siteTemplate || isMystery) && (<button><Link to="/tasks"> Tasks </Link></button>)}
          
          {(siteTemplate || isMurder) && (<button><Link to="/evidence"> Evidence </Link></button>)}

          <button><Link to="/login"> Login </Link></button>

          {siteTemplate && (<button><Link to="/admin-home"> Admin </Link></button> )}
    </>
  )
}

const Header = () =>   
{  
  return (
    <>
    <div id="header">
        <nav>
        <Links/>
        </nav>
    </div>
    </>
  )
}

export default Header
