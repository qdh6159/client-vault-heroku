import React, { Component } from 'react'
import { FormInput, Button } from "shards-react";

class Login extends Component {
    constructor(){
        super();
        this.state = {
            username: null, 
            password: null
        }
    }
    handleChange = (e) => {
        this.setState ({
            [e.target.name] : e.target.value
        })
        console.log(this.state)
    }
    handleSubmit = (e) => {
        e.preventDefault()
        console.log("Login *********************")
        this.props.handleLogin(this.state)
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit} class="formTwo">
                username: <FormInput type="text" name="username" onChange={this.handleChange}/>
                password: <FormInput type="password" name="password" onChange={this.handleChange}/>
                {/* <input type="submit" value="Login" /> */}
                <Button type="submit">Login</Button>
            </form>
        )
    }
}

export default Login