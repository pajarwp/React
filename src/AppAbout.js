import React, { Component } from 'react';
import Footer from './About/Footer';
import About from './About/About';
import Info from './About/Info'
import {Redirect} from 'react-router-dom';
import {connect} from 'unistore/react'
import {actions} from './Store';
import {withRouter} from 'react-router-dom'

class AppAbout extends Component{
    render(){
    if (!this.props.is_login) {
        return <Redirect to={{pathname:"/signin"}}/>;
    }
    else {
        return(
            <div>
                <About/>
                <Info/>
                <Footer/>
            </div>
        )}
    }
}

export default connect(
    "is_login",
    actions
  )(withRouter(AppAbout));