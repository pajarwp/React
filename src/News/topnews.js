import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import '../assets/css/blog-post.css'

const TopNews = props => {
    return (
    <div>    
        <li>
            <a href="#">{props.title}</a>
        </li><br/>   
    </div>             
    )
  }

TopNews.propTypes = {
    title: PropTypes.string.isRequired,
}

export default TopNews;