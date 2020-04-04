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
        <div className="header">Rubie
        </div>
        <Footer />
        <img src={viki} alt="mypic" className="portfoliopic"/>
        <NavBar />
        <h3 className="portfolio_name" id="portfolio">PORTFOLIO</h3>
        <Gallery />
        <br />
        <hr />
        <br />
        <br />
        <div className="Services"><h5>What I do</h5><br />
        Strategy, design and a bit of magic
        <GetPricing />
        </div>
        <h3 className="myskills">My Skills</h3>
        <div className="ContactForm">Get In Touch
        <br />
        
          <Form />
        </div>
        
      </div>
    </Router>
  );
}

export default App;

/*
 <div className="background-text">
        <h5>You Work..We Build..</h5>
        </div>

<video autoPlay loop muted>
          <source src={portfoliovideo} type="video/mp4"/>
        </video>
        */