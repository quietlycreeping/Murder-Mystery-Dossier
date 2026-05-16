/*=========================================================
 Author:     J. Orlando
 Date:       May 2026
 Description: Admin header component
==========================================================*/
import { Link } from "react-router-dom";

const A_Header = () => 
{
  return (
    <>
    <div id="header">
        <nav>
           <button><Link to="/"> Murder Home </Link></button>
           <button><Link to="/admin-home"> Admin Home </Link></button>
           <button><Link to="/admin-characters"> Admin Characters </Link></button>  
        </nav>
    </div>
    </>
  )
}

export default A_Header
