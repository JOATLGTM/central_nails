import React from 'react';
import { Switch, Link, Route } from 'react-router-dom'
import Home from './components/Home'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Aesthetics from './components/Aesthetics'
import Contact from './components/Contact'
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="header">
        <div>
          <div><p style={{textAlign: "center"}}>This is where the logo would go</p></div>
        </div>
        <div className="links">
          <div className="link"><Link to="/">Home</Link></div>
          <div className="link"><Link to="/services">Services</Link></div>
          <div className="link"><Link to="/gallery">Gallery</Link></div>
          <div className="link"><Link to="/aesthetics">Aesthetics</Link></div>
          <div className="link"><Link to="/contact">Contact</Link></div>
        </div>
      </header>
      <main className="main">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/aesthetics" component={Aesthetics} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </main>
      <footer className="footer">
        <div>
          <h4>Hours</h4>
          <p>
            Mon - Fri 10am-7:30pm
            <br/>
            Sat 10am-6:30
            <br/>
            Sun Closed
          </p>
        </div>
        <div>
          <h4>Contact</h4>
          <p>
            614-309-3089
          </p>
        </div>
        <div>
          <h4>Location</h4>
          <p>
          1357 Worthington Centre Dr 
          <br/>
          Worthington, OH 43085
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
