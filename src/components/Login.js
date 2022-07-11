import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./styling/login.css";

function Login() {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const validateData = (userDetails) => {
    const regex = new RegExp(".+@.+..+");

    let isEmailValid = userDetails.userEmail.trim().length
      ? regex.test(userDetails.userEmail)
      : false;
    let isPasswordValid = userDetails.userPassword.trim().length ? true : false;

    if (isEmailValid && isPasswordValid) return true;

    if (!isEmailValid) {
      alert("Wrong email address😶");
    } else if (!isPasswordValid) {
      alert("Password cannot be empty!");
    }
    return false;
  };

  const handleEmail = (e) => {
    setUserEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setUserPassword(e.target.value);
  };

  const handleLogin = () => {
    const userDetails = {
      userEmail,
      userPassword,
    };
    localStorage.setItem('userEmail',userEmail)
    localStorage.setItem('userPassword',userPassword)
    localStorage.setItem('loggedIn','true')
    navigate(0)
  };

  useEffect(() => {
    console.log("<Login />");
    if (localStorage.getItem("userId")) {
      navigate("/home");
    }
  }, []);

  return (
    <div className="login__mainContainer">
      <h1>Login</h1>
      <input
        type="text"
        value={userEmail}
        placeholder="Email"
        onChange={handleEmail}
      />
      <input
        type="Password"
        value={userPassword}
        placeholder="Password"
        onChange={handlePassword}
      />
      <button onClick={handleLogin} disabled={isLoading ? true : false}>Login</button>

      <Link to="/signup">Don't have an account</Link>
    </div>
  );
}

export default Login;
