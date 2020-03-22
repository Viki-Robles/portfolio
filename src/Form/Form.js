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
                    <input placeholder="First Name " value={this.state.firstName} 
                    onChange={e => this.setState({firstName: e.target.value})}/>
                    <input placeholder="Last Name " value={this.state.lastName}
                    onChange={e => this.setState({lastName: e.target.value})}/>
                    <input placeholder="Email " value={this.state.email}
                    onChange={e => this.setState({email: e.target.value})}/>
                </form>

            </>
        );
    }
}