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
import viki from '../src/images/viki.jpg';


function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <div className="header">
          Rubie
        </div>
        <NavBar />
        

        <h3 className="portfolio_name" id="portfolio">PORTFOLIO</h3>
        <Gallery />
        <br />
        <hr />
        <br />
        <br />
        <div className="Services">SERVICES
        <GetPricing />
        </div>
        <div className="ContactForm">Get In Touch
        <br />
          <Form />
        </div>
        <Footer />
        
       <HomeButton/>
      </div>
    </Router>
  );
}

export default App;

/*
 <div className="background-text">
        <h5>You Work..We Build..</h5>
        </div>*/