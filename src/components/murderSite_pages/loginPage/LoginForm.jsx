/*=========================================================
 Author:     J. Orlando
 Date:       May 2026
 Description: Murder mystery login page with various components
==========================================================*/
import { useNavigate, Link } from "react-router-dom";
import { useState, useContext, useEffect} from "react";
//======Contexts===========================
import { UserContext } from "../../contexts/UserContext";

const LoginForm = () => 
{
    const navigate = useNavigate(); 
    const {handleLogin,loginStatus} = useContext(UserContext);

    const handleSubmit = (formData) => {
        const inputedUser = formData.get("username");
        console.log(inputedUser);
        const inputedPassword = formData.get("password");
        handleLogin(inputedUser,inputedPassword);
    }
    
    useEffect(() => {
        loginStatus && navigate('/profile', { replace: true }); 
    }, [loginStatus]); 


    return (
    <>
    <form action={handleSubmit}>
        <input 
            name="username" 
            placeholder="User Name"
        />
        <input 
            name="password"
            placeholder="Password" 
            type="password"
        />
        <button type="submit">Log In</button>
    </form>
    </>
  )
}
export default LoginForm