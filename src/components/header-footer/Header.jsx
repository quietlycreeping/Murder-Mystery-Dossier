import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <>
    <div id="header">
        <nav>
           <button><Link to="/"> Home </Link></button>
           <button><Link to="/admin"> Admin </Link></button> 
        </nav>
    </div>
    </>
  )
}

export default Header