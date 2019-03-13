import React, { Component } from 'react';
import Search from './Search/Search'
import News from './News/news'
import TopNews from './News/topnews'
import axios from 'axios';
import {connect} from 'unistore/react'
import {actions} from './Store';
import {withRouter} from 'react-router-dom'
const imgNull = 0;

const baseUrl = "https://newsapi.org/v2/";
const keyApi = "370ef054d39243f894b442fd88c40a52"
const search = "sport"
const country = "us"

const urlHeadline = baseUrl + "everything?q=" + search + "&apiKey=" + keyApi
const urlHeadline2 = baseUrl + "top-headlines?country="+ country + "&apiKey=" + keyApi
class App extends Component {
  
  componentDidMount = () => {
    this.props.newsBlog().then(() => {
        console.log(this)
      }
    )
  }

handleInputChange = e => {
  const value = e.target.value;  
      this.props.searchNews(value);
    }
  
handleClick = e => {
  const basketball = "Basketball"
  this.props.searchCategory(basketball)
}
handleClick1 = e => {
  let volleyball = "Volleyball"
  this.props.searchCategory(volleyball)
}
handleClick2 = e => {
  let football = "Football"
  this.props.searchCategory(football)
}
  render() {
    const {listNews, listTopNews} = this.props;
    return (
  <div>
    <div class="container">
    <Search doSearch={this.handleInputChange} doClick={this.handleClick} doClick2={this.handleClick2} doClick1={this.handleClick1}/>
    </div>
    <div class="container">
      <div class="row">
        <div class="card my-4 col-md-4">
          <h5 class="card-header">Top News</h5>
          <div class="card-body">
              <div class="row">
                  <ul class="list-unstyled mb-0">
                    {listTopNews.map((item, key) =>{
                      return <TopNews class="col-md-4" key={key} title={item.title}/>
                    })}
                  </ul>
              </div>
          </div>
        </div>
        <div class="col-md-8">
          {listNews.map((item, key) =>{
            return <News key={key} title={item.title} img={item.urlToImage} content={item.content}/>
          })}
        </div>
      </div>
    </div>
  </div>
    );
  }
}

export default connect(
  "listNews,listTopNews",
  actions
)(withRouter(App));