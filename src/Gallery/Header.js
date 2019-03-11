import React, {Component} from 'react';
import '../App.css';
import '../assets/css/bootstrap.min.css';
import '../assets/css/main-gallery.css'

class Header extends React.Component {
  render (){
    return (
      <header>
        <img className="logo-head" src={require('../assets/logo/logo-alterra-academy@2x.png')}/>
        <nav>
            <ul>
                <a href="about.html" id="nav-color"><li className="listnav">ABOUT</li></a>
                <a href="gallery.html"><li className="listnav">GALLERY</li></a>
                <a href="contact.html"><li className="listnav">CONTACT</li></a>
            </ul>
        </nav>
      </header>
    )
  }
}

export default Header;
