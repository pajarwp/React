import React, { Component } from 'react';
import Navigation from'./Navigation/Navigation';
import Footer from './About/Footer';
import About from './About/About';
import Info from './About/Info'
import {Redirect} from 'react-router-dom';
const AppAbout = props =>{
    const is_login = JSON.parse(localStorage.getItem("is_login"));

    if (is_login === null) {
        return <Redirect to={{pathname:"/signin"}}/>;
    }
    else {
        return(
            <div>
                <About/>
                <Info/>
                <Footer/>
            </div>
        )
    }
}

export default AppAbout