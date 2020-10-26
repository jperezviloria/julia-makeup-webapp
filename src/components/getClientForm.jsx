import React from "react";
import axios from "axios";
import {ClientForm} from "../style/Style";

export default class GetClientForm extends React.Component { 

    state = {
        client: []
    }

    componentDidMount() {
        axios.get(`/client`)
        .then(response => {
            this.setState({client: response.data})
        });
    }

    render() {
        return (

            <ClientForm>
                {
                    this.state.client.map(client=>
                        <div>
                            <h3>{"Name: " + client.nameClient}</h3>

                            <h3>{"Phone number: " + client.phoneNumberClient}</h3>

                            <h3>{"DNI: " + client.dniClient}</h3>

                            <h3>{"MakeUp date:  " + client.dateMakeUpClient}</h3>

                        
                        </div>
                        )
                }
            </ClientForm>
        )
    }



}




