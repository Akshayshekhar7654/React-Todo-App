import React from 'react';
import './login.css'
import Signup from "./Signup"
import {
    Route,
    Switch
  } from 'react-router-dom';


export default function Login() {
    return (
        <>
        <div className="main__div">
            <div className="login">
                <h1>Log in!</h1>
            </div>
            <form onSubmit={this.onSubmit}>  
                <div className="input">
                    <input value={this.state.email} onChange={this.onChangeEmail} required type="text" placeholder="Enter Email Address"/>
                    <label>&nbsp;&nbsp;Email Address&nbsp;&nbsp;</label>
                </div>
                <div className="input">
                    <input value={this.state.password} onChange={this.onChangePassword} required type="text" placeholder="Enter Password"/>
                    <label > &nbsp;&nbsp;&nbsp;Password&nbsp;&nbsp;&nbsp;</label>
                </div>
                <div className="forget">
                    <div>
                        <input type="checkbox" / >
                        <label > Remember me</label>
                    </div>
                    <div>
                        <p>Forget Password?</p>
                    </div>
                </div>
                <div className="input btn">
                    <input type="submit" value="Log in" />
                </div>

            </form>
            
            <a href="signup">
            <Switch>
                <Route  path="/" component={Signup}> New User? Sign Up!</Route>
            </Switch>
            </a>
        </div>
        </>
    )
}
