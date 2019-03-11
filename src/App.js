import React, { Component } from 'react';
import Search from './Search/Search'
import Header from './Blog/Header'
import TopNews from './Blog/TopNews'
import Post from './Blog/Post'
class App extends Component {
  render() {
    return (
  <div>
    <div class="container">
    <Header />
    <Search />
    </div>
    <div class="container">
      <div class="row">
        <TopNews/>
        <Post/>
      </div>
    </div>
  </div>
    );
  }
}

export default App;