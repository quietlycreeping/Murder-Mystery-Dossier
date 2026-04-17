import { Link } from "react-router-dom";
import "./homePage.css";

const HomePage = () => {
  return (
    <>
      <div>
        Home Page here
      <nav>
          <Link to="/admin">Admin</Link>
      </nav>
      </div>    
    </>
  )
}

export default HomePage
