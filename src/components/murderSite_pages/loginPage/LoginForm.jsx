import { useActionState, useState, useContext, } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom"

const LoginForm = () => {
    const {checkLogin, loggedIn} = useContext(UserContext);
    const navigate = useNavigate();
  
    function handleLogin(formData){
        const userName = formData.get("userName")
        const password = formData.get("password")
        checkLogin (userName, password);
       loggedIn ? (navigate("/profile", {replace: true})) : (alert('Wrong password or username.'));
    }
    return (
    <>
    <form action={handleLogin}>
        <input name="userName" placeholder="User Name"/>
        <input type="password" name="password" placeholder="Password" />
        <button type="submit">Log In</button>
    </form>
    </>
  )
}

export default LoginForm