import React from "react";
import axios from "axios";

export default class SendClientForm extends React.Component {

    state = {
        client: []
    }

    onChangenameClient = (e) => {
        this.setState({
            nameClient: e.target.value
        })
    }

    onChangephoneNumberClient = (e) => {
        this.setState({
            phoneNumberClient: e.target.value
        })
    }

    onChangedniClient = (e) => {
        this.setState({
            dniClient: e.target.value
        })
    }

    onChangedateMakeUpClient = (e) => {
        this.setState({
            dateMakeUpClient: e.target.value
        })
    }

    onSubmitClient = async (e) => {

    const response = await axios.post(`/client/save`, {

        nameClient: this.state.nameClient,
        phoneNumberClient: this.state.phoneNumberClient,
        dniClient: this.state.dniClient,
        dateMakeUpClient: this.state.dateMakeUpClient

    });
    this.setState({
        nameClient:'',
        phoneNumberClient:'',
        dniClient:'',
        dateMakeUpClient:''
    });

    console.log(response);

    }

    render(){
        return(
            <div>
                <form onSubmit={this.onSubmitClient}>

                    <input 
                    type="text"
                    name="nameClient"
                    onChange={this.onChangenameClient}
                    placeholder="name"/>
                    <input 
                    type="number"
                    name="phoneNumberClient"
                    onChange={this.onChangephoneNumberClient}
                    placeholder="phone"/>
                    <input 
                    type="number"
                    name="dniClient"
                    onChange={this.onChangedniClient}
                    placeholder="dni"/>
                    <input 
                    placeholder="date"
                    type="text"
                    name="dateMakeUpClient"
                    onChange={this.onChangedateMakeUpClient}/>
                    <button type="submit">Send</button>

                </form>
            </div>
        )
    }
}    
