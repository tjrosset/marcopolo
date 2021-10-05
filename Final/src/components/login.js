import React, {useState} from 'react';
import {Container} from 'react-bootstrap';

import '../styles/login.css'

function Login() {
    const [userInfo, setUserData] = useState({user:'', pass:''});

    const updateInput = (e) => {
        setUserData((prevState) => {
          return {
            ...prevState,
            [e.target.name]: e.target.value,
          };
        });
      };

    const submitHandler = e => {
        e.preventDefault();
        if(userInfo.user == process.env.REACT_APP_SECURE_USERKEY && userInfo.pass == process.env.REACT_APP_SECURE_PASSKEY){
            sessionStorage.setItem("isAuth", process.env.REACT_APP_SECURE_TOKEN)
            console.log(sessionStorage.getItem('isAuth'))
            window.location.pathname = "/pop";
        }

        else{
            console.log('failed login')
            alert("Login Information is not valid. Please try again.")
        }
    };


    return (
        <Container className="logincontainer">
            <h2>Login</h2>
            <br></br>
            <form className="loginform">
                <label>UserName</label>
                <input className="inp" name ='user' placeholder="Enter Username" wrap="hard" onChange={(e) => updateInput(e)} required />

                <label>Password</label>
                <input className="inp" name ='pass' type='password' placeholder="Enter Password" wrap="hard" onChange={(e) => updateInput(e)} required />

                <button type='submit' className="submitbutto" onClick={submitHandler}>Submit</button>
            </form>
            <br></br>
        </Container>
    )

}

export default Login;