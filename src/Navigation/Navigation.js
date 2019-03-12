import React, { Component } from 'react';
import '../assets/css/bootstrap.min.css';
import '../assets/css/main-gallery.css';
import {Link} from "react-router-dom"
const Navigation = props => {
  return (
    <header>
    <img className="logo-head" src={require('../assets/logo/logo-alterra-academy@2x.png')}/>
    <nav>
        <ul>
            <li className="listnav"><Link to="/">About</Link></li>
            <li className="listnav"><Link to="/gallery">Gallery</Link></li>
            <li className="listnav"><Link to="/contact">Contact</Link></li>
            <li className="listnav"><Link to="/news">News</Link></li>
            <li className="listnav"><Link to="/profile">Profile</Link></li>
            <li className="listnav"><Link to="/signin">Sign In</Link></li>
            <li className="listnav"><Link to="/" onClick={() => props.postSignout()}>Log Out</Link></li>
        </ul>
    </nav>
  </header>
  )
}


export default Navigation;