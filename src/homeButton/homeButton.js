import React, { Component } from 'react';


export default class HomeButton extends Component {
    constructor() {
        super();
        this.state = { isMoving: false };
    }

    
    
    render () {
        return (
            <div>
                <button className="homeButton">Home</button>
            </div>
        );
    }
}

/* function toogleButton () {
    this.setState { 
        (if(isMoving === true) {
            return (
                <Link to= '/portfolio'/>
            );
        }
        )};
}*/