import React, {Component} from 'react';
import '../App.css';

class Footer extends React.Component {
  render (){
    return (
    <footer>
        <div className="container">
            <div className="row">
                <div className="col-md-6 marginfoot">
                    <img className="logo-foot" src={require('../assets/logo/logo-alterra-academy-plain@2x.png')}/><br/>
                    <span className="copyright">©Copyright Alterra Group 2019</span>
                </div>
                <div className="col-md-6 rowfoot">
                    <span id="follow">Follow Us On</span><br/>
                    <ul style={{listStyle: "none"}}>
                        <li className="medsos">
                            <img className="imgfoot" src={require("../assets/ico/ico-facebook@2x.png")}/><span className="medword">Facebook</span>
                        </li>
                        <li className="medsos">
                            <img className="imgfoot" src={require("../assets/ico/ico-twitter@2x.png")}/><span className="medword">Twitter</span><br/>
                        </li>
                        <li className="medsos">
                            <img className="imgfoot" src={require("../assets/ico/ico-instagram@2x.png")}/><span className="medword">Instagram</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
    )
  }
}

export default Footer;
