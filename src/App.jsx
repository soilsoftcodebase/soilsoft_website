import React from 'react';
import { Navbar, Hero, Achievement, Categories, CTA, Footer, RequestDemo, RequestDemo2, Products, Services, MicrosoftForm, CTA2  } from './components';
import './App.css';
const App = () => {
  return (
    <>
      <div>
        <Navbar />
  
        <div id="hero">
          <Hero />
        </div>

        <div id="services">
          {/* <RequestDemo2 /> */}
          <CTA2/>
          <Services />
        </div>

        <div id="products">
          <Products />
        </div>

        <div id="cta">
          <CTA />
        </div>

        <div id="footer">
          <Footer />    
        </div>
      </div>
    </>
  );
}

export default App;
