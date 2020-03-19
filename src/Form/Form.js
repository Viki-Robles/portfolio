import React, { Component } from 'react';

export default class Form extends Component {
    constructor() {
        super();
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
        }
    }


    render() {
        return (
            <>
                <form>
                    <input placeholder="First Name: " value={this.state.firstName} 
                    onChange={e => this.setState({firstname: e.target.value})}/>
                    <input placeholder="Last Name: " value={this.state.lastName}></input>
                    <input placeholder="Email: " value={this.state.email}></input>
                </form>

            </>
        );
    }
}