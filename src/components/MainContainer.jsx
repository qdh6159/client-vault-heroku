import React, { Component} from 'react'
import ClientList from "./ClientList/ClientList"
import ClientNav from "./nav"
import StatusBar from './statusBar/StatusBar'


class MainContainer extends Component {
    constructor() {
        super();
        this.state = {
            clients: [],
            qualifiedFilter: null,
            currentClient: null,
        }
    }

    componentDidMount() {
        console.log("component is mounting")
        this.getClients();
    }
    deleteClient = async (id) => {
        
        try{
            const deleteClient = await fetch(`${process.env.REACT_APP_BACKEND_ADDRESS}/clients/${id}`, {
                method: "DELETE",
                // credentials: "include",
            })
            const parsedResponse = await deleteClient.json();
            console.log(parsedResponse)
            if(parsedResponse.status.code === 200) {
                console.log(id)
                this.setState({
                    clients: this.state.clients.filter(client => client._id !== id)
                    
                })
                console.log(this.state.clients)
            }
        }catch(err){
            console.log(err)
        }
    }
    updateClient = async (id, formData) => {
        const updateClient = await fetch(`${process.env.REACT_APP_BACKEND_ADDRESS}/clients/${id}`, {
            method: "PUT",
            body: JSON.stringify(formData),
            credentials: false,
            headers: {
                "Content-Type": "application/json"
            }
        })
        const parsedResponse = await updateClient.json();
        console.log(parsedResponse)
        if(parsedResponse.status.code === 201){
            this.setState({
                clients: this.state.clients.map(function(client){
                    if(client._id === id){
                        return parsedResponse.data
                    }else{
                        return client
                    }
                })
            })
        }
        
    }
    createClient = async (formData) => {
        console.log(formData)
        try{
            const newClient = await fetch(`${process.env.REACT_APP_BACKEND_ADDRESS}/clients`, {
                method: "POST",
                body: JSON.stringify(formData),
                credentials: false,
                headers: {
                    "Content-Type": "application/json",
                    
                }
            })
            const parsedResponse = await newClient.json();
            if(parsedResponse.status.code === 201){
                console.log("Got the clients")
                this.setState({
                    clients: [...this.state.clients, parsedResponse.data]
                })
            }
            console.log("********************")
            console.log(this.state)
        }catch(err) {

        }
    }
    getClients = async () => {
        try{
            console.log("Getting the movies*****************")
        const clients = await fetch(`${process.env.REACT_APP_BACKEND_ADDRESS}/clients`)
        const parsedResponse = await clients.json();
        if(parsedResponse.status.code === 200){
            this.setState({
                clients: parsedResponse.data})
                console.log(parsedResponse.data)
                console.log("We got the movies")
                console.log(this.state)
            }
        }catch(err){
            console.log(err)
        }
    }
    engageRetirementFilter = () => {
        console.log("turned on retirement filter")
        this.setState({qualifiedFilter: true})
    }
    turnOffRetirementFilter = () => {
        console.log("turned off retirement filter")
        this.setState({qualifiedFilter: false})
    }

    
    render() {
        let clientFilter = this.state.clients.filter((clients) => {
            if(this.state.qualifiedFilter === true){
                return clients.retirement.includes("yes")
            }else{
                console.log("no filter detected - sending all clients")
                return this.state.clients
            }
        })
        return(
            <div>
                <ClientNav createClient= {this.createClient} />
                {/* <h3>.</h3> */}
                <ClientList updateClient={this.updateClient} turnOffRetirementFilter={this.turnOffRetirementFilter} engageRetirementFilter={this.engageRetirementFilter} updatePlant={this.updatePlant} deleteClient={this.deleteClient} clients={clientFilter} />
                <StatusBar />
                
            </div>
        )
    }
}

export default MainContainer;