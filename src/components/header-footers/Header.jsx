/*=========================================================
 Author:     J. Orlando
 Date:       May 2026
 Description: Murder mystery header component
==========================================================*/
import { Link } from "react-router-dom";
//======Contexts===========================
//======Components=========================


  
const Header = () =>   
{  
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
