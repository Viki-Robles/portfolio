import React from 'react';
import '../Menu/Menu.css';
import hamburger from '../images/hamburger.png';


export default class Menu extends React.Component {
    constructor() {
        super();
        this.state = { isExpanded: false };
    }

    toggle() {
        this.setState({ isExpanded: !this.state.isExpanded });
    }


    render() {
        return (
            <div>
                <MenuButton toggle={this.toggle}
                isExpanded={ this.state.isExpanded}/>
                <div className="Menu">
                    <div className="Menu-link">home</div>
                    <div className="Menu-link">projects</div>
                    <div className="Menu-link">contact</div>
                </div>
            </div>
        );
    }
}

function MenuButton(props) {
    return (
        <button
            onClick={props.toggle ? "Yes": "no"}
            className="burgerButton">
            <img className="burger" src={hamburger} alt="hamburger" />
        </button>
    );
}