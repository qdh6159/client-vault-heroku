import React, {Component} from 'react'
import Register from '../Register/Register'
import Login from './Login/Login'
import PlantNav from '../nav'

class AuthGateway extends Component {
    constructor(){
        super();
        
    }
    render(){
        return(
            <div>
                <PlantNav/>
                <h1>Welcome to Plant<span role="img">🌿</span>Nerd<span role="img">🤓</span></h1>
                <h3>Register as a new User</h3>
                <Register handleRegister={this.props.handleRegister} />
                <h3>Existing users login below</h3>
                <Login handleLogin={this.props.handleLogin}/>
            </div>
        )
    }
}

export default AuthGateway