import React from "react";
import "./Login.css";
import { useState } from "react";
import store from "./Redux/store";
import { useNavigate } from "react-router-dom";

import { userSignedUp , addedCurrentUser} from "./Redux/actions";



export default function Login(props) {
  const navigate = useNavigate();
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [address, setaddress] = useState("");
  const [password, setpassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [errors, seterrors] = useState([]);
  const [isLogin, setisLogin] = useState(false);

  function Submit() {
    store.dispatch(userSignedUp({ name, email, address, password }));
    store.dispatch(addedCurrentUser({ name, email, address, password }));
    navigate("/");
  }


  function submitSignUp(e) {
    e.preventDefault();
    if(!isLogin){
    let isPresent = false;
    const Data = [...store.getState().reducer];
    Data.forEach((ele) => {
      if (ele.user.name === name) isPresent = true;
    });
    isPresent &&  alert("already present");
    validateS() && !isPresent && Submit();
  }
  else{
    let isPresent=false;
    const Data = [...store.getState().reducer];
    validateL();
    Data.forEach((ele) => {
      if(ele.user.email === email && ele.user.password !== password) {seterrors(["incorrect password"]); isPresent= true;}
      if (ele.user.email === email && ele.user.password === password)  navigate("/");
     
    });
    if(!isPresent) seterrors(['user not registered']);
  }
  }


  function validateS() {
    let errorMsg = [];
    if (
      name === "" ||
      email === "" ||
      password === "" ||
      address === "" ||
      confirmPassword === ""
    ) {
      errorMsg.push("Please fill all datas");
    }
    var patternPassword = new RegExp(
      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$/
    );
    var patternEmail = /^\w+@\w+\.\w{2,3}$/;
    if (!patternEmail.test(email) && email && password) {
      errorMsg.push("Incorrect Email");
    }
    if (!patternPassword.test(password) && email && password) {
      errorMsg.push(
        "Passwords should have at least one uppercase letter, numbers and a special character"
      );
    }
    if (password && confirmPassword && password !== confirmPassword) {
      errorMsg.push("Passwords doen't match");
    }
    seterrors([...errorMsg]);
    return errorMsg.length ? false : true;
  }
  function validateL() {
    let errorMsg = [];
    if(email=== '' || password === '') {errorMsg.push("Please fill all datas"); }
    var patternPassword = new RegExp(
      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$/
    );
    var patternEmail = /^\w+@\w+\.\w{2,3}$/;
    if (!patternEmail.test(email) && email && password) {
      errorMsg.push("Incorrect Email");
    }
    if (!patternPassword.test(password) && email && password) {
      errorMsg.push(
        "Passwords should have at least one uppercase letter, numbers and a special character"
      );
    }
    seterrors([...errorMsg]);
    return true;
  }

  return (
    <center>
      <div className="login">
        {errors.length > 0 && <p>Error! {errors[0]}</p>}

        {!isLogin ? <h1>Sign-Up</h1> : <h1>Log-In</h1>}
        <form className="login-form">
          {!isLogin && (
            <div className="name-input">
              <label htmlFor="name"> Name</label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setname(e.target.value)}
                placeholder="Type your name"
                required={true}
              />
            </div>
          )}

          <div className="email-input">
            <label htmlFor="Email"> Email</label>
            <input
              id="Email"
              type="email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              placeholder="Type your ID"
              required={true}
            />
          </div>
          {!isLogin && (
            <div className="address-input">
              <label htmlFor="address"> Address</label>
              <input
                id="address"
                type="text"
                value={address}
                onChange={(e) => setaddress(e.target.value)}
                placeholder="Type your address"
                required={true}
              />
            </div>
          )}
          <div className="password-input">
            <label htmlFor="Password"> Password</label>
            <input
              id="Password"
              type="password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              placeholder="Type your Password"
              required={true}
            />
          </div>
          {!isLogin && (
            <div className="confirm-password-input">
              <label htmlFor="confirm-password"> Confirm Password</label>
              <input
                id="confirm-password"
                type="password"
                value={confirmPassword}
                onChange={(e) => setconfirmPassword(e.target.value)}
                placeholder="Type your confirm-password"
                required={true}
              />
            </div>
          )}
          <div className="button_wrap">
            {" "}
            <div className="login-button">
              <button id="Login_Button" type="Submit" onClick={submitSignUp}>
                {!isLogin ? "Sign-Up" : "Log-In"}
              </button>
            </div>
            <h4>Or</h4>
            <div className="logOrSign" onClick={() => {setisLogin(!isLogin); seterrors([])}}>
              {!isLogin ? <p>Log-In</p> : <p>Sign-Up</p>}
            </div>
          </div>
        </form>
      </div>
    </center>
  );
  
}





