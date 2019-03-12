import React, { Component } from 'react';
import Navigation from'./Navigation/Navigation';
import Footer from './Gallery/Footer';
import Gallery from './Gallery/Gallery';
class AppGallery extends React.Component{
    render(){
        return(
            <div>
                <Gallery/>
                <Footer/>
            </div>
        )
    }
}

export default AppGallery