import React, {Component} from 'react';
import '../App.css';
import '../assets/css/bootstrap.min.css';
import '../assets/css/search.css'

class Search extends React.Component {
  render (){
    return (
    <div class="topnav">
        <a class="active" href="#home">Home</a>
        <a href="#">Football</a>
        <a href="#">Volleyball</a>
        <a href="#">Basketball</a>
        <div class="search-container">
          <form action="/action_page.php">
            <input type="text" placeholder="Search.." name="search"/>
            <button type="submit">Submit</button>
          </form>
        </div>
    </div>
      
    )
  }
}

export default Search;
