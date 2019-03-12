import React, {Component} from 'react';
import '../App.css';
import '../assets/css/main-about.css'

class About extends React.Component {
  render (){
    return (
    <div className="banner">
        <img className="profile" src={require("../assets/img/jokowi.jpeg")}/>
        <p className="nama">Joko Widodo</p>  
        <p className="location">Jakarta, Indonesia</p>
        <p className="job">Presiden Indonesia</p>
        <button type="button" className="cv">Download CV</button>
    </div>
    )
  }
}

export default About;
