import React from 'react';
import './App.css';
import NavBar from './NavBar/NavBar';
import Gallery from './Container/Gallery';




function App() {
  return (

    <div className="App">
      <div className="header">
        Rubie
      </div>
      <NavBar />
      <div className="portfolio_name">PORTFOLIO</div>
      
     <Gallery/>
     <br/>
     <hr/>
     <br/>
     <br/>

     <div className="Services">SERVICES</div>

      
      
    </div>

  );
}

export default App;

