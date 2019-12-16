import React, { Component } from 'react'
import { FormInput } from "shards-react";
import { Button} from "shards-react";
class Register extends Component {
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
        console.log("SUBMITTED THE FORM")
        this.props.handleRegister(this.state)
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit} class="formOne">
                username: <FormInput type="text" name="username" onChange={this.handleChange}/>
                password: <FormInput type="password" name="password" onChange={this.handleChange}/>
                <Button type="submit">Register</Button>
            </form>
        )
    }
}

export default Register