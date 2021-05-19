import React, { Component } from 'react';
import './login.css'
import Signup from "./Signup"
import {
    Route,
    Switch
  } from 'react-router-dom';



export default class Login extends Component {
    userData;
    // mainInput=document.getElementById(this.mainInput)
    constructor(props) {
        super(props);

        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            email: '',
            password: ''
        }
    }

    // Form Values

    onChangeEmail(e) {
        this.setState({ email: e.target.value })
        
    }

    onChangePassword(e) {
        this.setState({ password: e.target.value })
    }
    onSubmit(e){
        e.preventDefault()
        // this.mainInput.value = "";

        this.setState({
            email: '',
            password: '',
            
            
        })
    }
    // onSubmit(e) {
    //     e.preventDefault()
    //     // console.log(this.state.props)
    //     // this.mainInput.value=""
    // }

    // React Life Cycle
    componentDidMount() {
        this.userData = JSON.parse(localStorage.getItem('user'));

        if (localStorage.getItem('user')) {
            this.setState({
                email: this.userData.email,
                password: this.userData.password
            })
        } else {
            this.setState({
                email: '',
                password: ''
            })
        }
    }

    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('user', JSON.stringify(nextState));
    }


    render() {
        return (
            <>
        <div className="main__div">
            <div className="login">
                <h1>Log in!</h1>
            </div>
            <form onSubmit={this.onSubmit}>  
                <div className="input">
                    <input id="mainInput" value={this.state.email} onChange={this.onChangeEmail} required type="email" placeholder="Enter Email Address"/>
                    <label>&nbsp;&nbsp;Email Address&nbsp;&nbsp;</label>
                </div>
                <div className="input">
                    <input value={this.state.password} onChange={this.onChangePassword} required type="password" placeholder="Enter Password"/>
                    <label > &nbsp;&nbsp;&nbsp;Password&nbsp;&nbsp;&nbsp;</label>
                </div>
                <div className="forget">
                    <div>
                        <input type="checkbox" />
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
}