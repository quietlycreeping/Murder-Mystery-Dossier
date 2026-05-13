import Header from "../../header-footers/Header.jsx";
import LoginForm from "./LoginForm.jsx";
import { useNavigate } from "react-router-dom"

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