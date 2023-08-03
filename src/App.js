//---Import Extensions---
import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

import "./styles.scss"

class App extends Component {
  
  render(){
    return(
      <div className = 'App'>
        <Navigation/>
        <Routes>
            <Route 
              path='/'
              index element = {<Home/>}
            />
            <Route 
              path='/about'
              index element = {<About/>}
            />
            <Route 
              path='/projects'
              index element = {<Projects/>}
            />
            <Route 
              path='/contact'
              index element = {<Contact/>}
            />
        </Routes>
        <Footer/>
      </div>
    )
  }
}

export default App;