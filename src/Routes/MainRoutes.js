import React from 'react';
import {Route, Switch} from 'react-router-dom';
import About from '../AppAbout';
import Gallery from '../AppGallery';
import Contact from '../AppContact';
import News from '../App';
import SignIn from '../AppSignIn'
import Profile from '../AppProfile'

const MainRoute = () =>{
    return(
        <Switch>
            <Route exact path="/" component={About}/>
            <Route exact path="/gallery" component={Gallery}/>
            <Route exact path="/contact" component={Contact}/>
            <Route exact path="/news" component={News}/>
            <Route exact path="/signin" component={SignIn}/>
            <Route exact path="/profile" component={Profile}/>
        </Switch>
    )
}

export default MainRoute;