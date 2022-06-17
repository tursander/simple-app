import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
 
import Home from './Home';
import About from './About';
import Category from './Category';
import Contact from './Contact';
import Navigation from './Navigation';

const titles = {
  '/': 'Home',
  '/about-us': 'About Us',
  '/category': 'All Categories',
  '/contact':  'Contact Us'
}

function Main() {
    const location = useLocation();
    //console.log(location);

    //let titlePage = titles[window.location.pathname];
    let titlePage = titles[location.pathname];

    return (      
        <div className="container">
          <Navigation />
            <div className="page-title">
              <h3>{titlePage}</h3>
            </div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about-us" element={<About />} />
              <Route path="/category" element={<Category />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
        </div> 
    )
}
 
export default Main;