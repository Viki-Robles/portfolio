import React, { Component } from 'react';


export default class HomeButton extends Component {
    constructor() {
        super();
        this.state = { isMoving: false};
    }

    
    render () {
        return (
            <div>
                <button>Home</button>
            </div>
        );
    }
}

/*function toogleButton () {
    this.setState { isMoving:true };
}*/