import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import '../assets/css/blog-post.css'

const News = props => {
    return (
    <div>
        <h1 class="mt-4">{props.title}</h1>
        <p class="lead">by <a href="#">Pajar Wijaya Putra</a></p>
        <p>Posted on January 1, 2019 at 12:00 PM</p>
        <img class="img-fluid rounded" src={props.img} alt=""/>
        <blockquote class="blockquote"/>
        <p class="mb-0">{props.content}</p>
        <button type="button" class="btn btn-primary" style={{marginTop:"50px"}}>Read More</button>
    </div>
    )
}

News.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    img : PropTypes.string
}

export default News;
