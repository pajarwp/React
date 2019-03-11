import React, {Component} from 'react';
import '../App.css';

class Gallery extends React.Component {
  render (){
    return (
        <div class="container">
            <div class="row row-gallery">
                <div class="col-md-4">
                    <img class="img-fluid img-gallery" src={require("../assets/img/exp-gallery/jake-allison-1322894-unsplash.jpg")}/>
                </div>
                <div class="col-md-4">
                    <img class="img-fluid img-gallery" src={require("../assets/img/exp-gallery/jay-lee-1323073-unsplash.jpg")}/>
                </div>
                <div class="col-md-4">
                    <img class="img-fluid img-gallery" src={require("../assets/img/exp-gallery/nic-yee-1321843-unsplash.jpg")}/>
                </div>
            </div>
            <div class="row row-gallery">
                <div class="col-md-4">
                    <img class="img-fluid img-gallery" src={require("../assets/img/exp-gallery/nordwood-themes-1319985-unsplash.jpg")}/>
                </div>
                <div class="col-md-4">
                    <img class="img-fluid img-gallery" src={require("../assets/img/exp-gallery/phil-desforges-1322844-unsplash.jpg")}/>
                </div>
                <div class="col-md-4">
                    <img class="img-fluid img-gallery" src={require("../assets/img/exp-gallery/ryan-1321510-unsplash.jpg")}/>
                </div>
            </div>
        </div>
    )
  }
}

export default Gallery;
