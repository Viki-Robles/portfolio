import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './NavBar/NavBar';
import Gallery from './Container/Gallery';
import GetPricing from './CardServices/getPricing';
import HomeButton from './homeButton/homeButton';
import ScrollToTop from './ScrollMenu/ScrollMenu';
import Footer from './Footer/Footer';


function App() {
  return (
  <Router>
    <ScrollToTop/>
    <div className="App">
      <div className="header">
        Rubie
        </div>
      <NavBar />
        <div className="portfolio_name">PORTFOLIO</div>
      <Gallery />
        <br />
        <hr />
        <br />
        <br />
        <div className="Services">SERVICES
      <GetPricing />
        </div>
        <div className="ContactForm">Get In Touch</div>
      <HomeButton />
      <Footer/>
    </div>
</Router>
  );
}

export default App;

