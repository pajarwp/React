import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import '../assets/css/bootstrap.min.css';
import '../assets/css/search.css'

class Search extends React.Component {
  render (){
    return (
    <div class="topnav">
        <a class="active" href="#home">Home</a>
        <a href="#" onClick={this.props.doClick2}>Football</a>
        <a href="#" onClick={this.props.doClick1}>Volleyball</a>
        <a href="#" onClick={this.props.doClick}>Basketball</a>
        <div style={{padding: "10px"}} class="search-container">
          <form action="/action_page.php">
            <input type="text" id="search" placeholder="Search.." name="search" onChange={this.props.doSearch}/>
          </form>
        </div>
    </div>      
    )
  }
}

export default Search;
