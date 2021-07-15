import "./login.css"
import React from 'react'

export default function Login() {
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Social</h3>
                    <span className="loginDesc">Social helps you connect and share with the people in your life.</span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input type="email" className="loginInput" placeholder="Email"/>
                        <input type="password" className="loginInput" placeholder="Password"/>
                        <button className="loginButton">Log In</button>
                        <span className="loginForgot">Forgot Password?</span>
                        <button className="registerButton">Create a New account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
