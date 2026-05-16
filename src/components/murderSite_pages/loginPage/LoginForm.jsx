/*=========================================================
 Author:     J. Orlando
 Date:       May 2026
 Description: Form component to be used for login
==========================================================*/
import { useActionState, useState, useContext, } from "react";
import { useNavigate } from "react-router-dom"
//======Contexts===========================
import { UserContext } from "../../contexts/UserContext";

const LoginForm = () => {
    //const {getLoggedIn, loggedIn} = useContext(UserContext);
    const navigate = useNavigate("/profile", {replace: true});
  
    function handleLogin(){
        const [formData, setFormData] = useState({
            inputUsername: "",
            inputPassword: "",
        });
        //setFormData(formData.inputUsername.get(inputUsername), formData.inputPassword.get(inputPassword));    

        //loggedIn ? navigate : (alert('Wrong password or username.'));
    }
    return (
    <>
    <form action={handleLogin}>
        <input name="inputUsername" placeholder="User Name"/>
        <input type="password" name="inputPassword" placeholder="Password" />
        <button type="submit">Log In</button>
    </form>
    </>
  )
}
export default LoginForm