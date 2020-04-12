import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './NavBar/NavBar';
import Gallery from './Container/Gallery';
import ScrollToTop from './ScrollMenu/ScrollMenu';
import Footer from './Footer/Footer';
import minimal from './images/minimal.jpg';
import MySkills from './Skills/MySkills';
import AboutMe from './images/AboutMe/AboutMe';
import CSSlogo from './images/CSSlogo.jpg';
import HTMLlogopng from './images/HTMLlogopng.png';
import JSlogo from './images/JSlogo.svg';
import react from './images/react.png';
import ServicesItems from './Services/ServicesItems';



function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Footer />
        <NavBar />
        <div className="header">V_siliki</div>
        <img src={minimal} alt="mypic" className="portfoliopic" />
        <AboutMe />
        <div className="squares">
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
        </div>
        <h3 className="portfolio_name" id="portfolio">PORTFOLIO</h3>
        <Gallery />
        <br />
        <hr />
        <div className="Services" id="services"><h5>What I do</h5><br />
          Strategy, design and a bit of magic
        </div>
        <ServicesItems />
        <h3 className="Services">My Skills</h3>
        <div className="myskills">
          <MySkills logo={CSSlogo} />
          <MySkills logo={JSlogo} />
          <MySkills logo={HTMLlogopng} />
          <MySkills logo={react} />
        </div>
        <div className="myDetails" id="myDetails">
          <h4 className="Contact">Email: vasiliki.robles@gmail.com</h4>
          <h4 className="Contact">Contact Number: +44 7438 577 974</h4>
        </div>
        <h3 className="endTitle">Designed & Build by Vasiliki Vasilopoulou</h3>
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