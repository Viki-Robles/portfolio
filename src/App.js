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
import vikipeki from './images/vikipeki.png';
import MySkills from './Skills/MySkills';



function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <div className="hero">
          <div className="header">Vasiliki</div>
          <Footer />
          <img src={vikipeki} alt="mypic" className="portfoliopic" />
          <NavBar />
        </div>

        <h3 className="portfolio_name" id="portfolio">PORTFOLIO</h3>
        <Gallery />
        <br />
        <hr />

        <div className="Services"><h5>What I do</h5><br />
          Strategy, design and a bit of magic
        <GetPricing />
        </div>
        <h3 className="myskills">My Skills</h3>
        <MySkills icon="React" />
        <MySkills icon="JavaScript" />
        <MySkills icon="HTML5" />
        <MySkills icon="CSS" />
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