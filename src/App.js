import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './NavBar/NavBar';
import Gallery from './Container/Gallery';
import GetPricing from './CardServices/getPricing';
import HomeButton from './homeButton/homeButton';
import ScrollToTop from './ScrollMenu/ScrollMenu';
import Footer from './Footer/Footer';
import Form from './Form/Form';


function App() {
  return (
  <Router>
    <ScrollToTop/>
    <div className="App">
      <div className="header">
        Rubie
        </div>
        <div className="text">
    You work..We build..
        </div>
      <NavBar />
        <div className="portfolio_name" id="portfolio">PORTFOLIO</div>
      <Gallery />
        <br />
        <hr />
        <br />
        <br />
        <div className="Services">SERVICES
      <GetPricing />
        </div>
        <div className="ContactForm">Get In Touch
        
        <Form/>
        </div>
        
      <HomeButton />
      <Footer/>
    </div>
</Router>
  );
}

export default App;

