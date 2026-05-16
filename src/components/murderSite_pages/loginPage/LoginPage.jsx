/*=========================================================
 Author:     J. Orlando
 Date:       May 2026
 Description: Murder mystery login page with various components
==========================================================*/
import { useNavigate } from "react-router-dom"
//======Components=========================
import Header from "../../header-footers/Header.jsx";
//import LoginForm from "./LoginForm.jsx";


const LoginPage = () => {
  return (
    <>
    <Header/>
      <div className="main-content">
        Login Page here
        <LoginForm/>
      </div>         
    </>
  )
}

export default LoginPage