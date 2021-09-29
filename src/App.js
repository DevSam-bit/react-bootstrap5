import React from 'react';
import './App.css';
import Navbar from './components/includes/Navbar';
import Home from './components/pages/Home';
import Aboutus from './components/pages/About';
import Contact from './components/pages/Contact';
import Footer from './components/includes/Footer';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/about">
            <Aboutus />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
