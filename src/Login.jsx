import React from 'react'
import './Login.css'
import {useState} from 'react'

export default function Login() {
const [name, setname] = useState('');
const [email, setemail] = useState('');
const [address, setaddress] = useState('');
const [password, setpassword] = useState('');
const [confirmPassword, setconfirmPassword] = useState('');

console.log("user details", name, email, address, password, confirmPassword);
    return (
        <center>
        <div class="login">
       
          <h1>Sign-Up</h1>
          <form class="login-form">
          <div class="name-input">
              <label for="name"> Name</label>
              <input
                id="name"
                type="text"
                value= {name}
                onChange={(e) => setname(e.target.value)}
                placeholder="Type your name"
                required="true"
              />
            </div>
            
    
            <div class="email-input">
              <label for="Email"> Email</label>
              <input
                id="Email"
                type="email"
                value= {email}
                onChange={(e) => setemail(e.target.value)}
                placeholder="Type your ID"
                required="true"
              />
            </div>
            <div class="address-input">
              <label for="address"> Address</label>
              <input
                id="address"
                type="text"
                value= {address}
                onChange={(e) => setaddress(e.target.value)}
                placeholder="Type your address"
                required="true"
              />
            </div>
            <div class="password-input">
              <label for="Password"> Password</label>
              <input
                id="Password"
                type="password"
                value= {password}
                onChange={(e) => setpassword(e.target.value)}
                placeholder="Type your Password"
                required="true"
              />
            </div>
            <div class="confirm-password-input">
              <label for="confirm-password"> Confirm Password</label>
              <input
                id="confirm-password"
                type="password"
                value= {confirmPassword}
                onChange={(e) => setconfirmPassword(e.target.value)}
                placeholder="Type your confirm-password"
                required="true"
              />
            </div>
            <div class="login-button">
              <button id="Login_Button" type="Submit" >
                Sign-Up
              </button>
            </div>
          </form>
      
      </div>
      </center>
    )
}
