import React, { Component } from 'react';
import Search from './Search/Search'
import Header from './Blog/Header'
import News from './News/news'
import TopNews from './News/topnews'
import axios from 'axios';

const imgNull = 0;

const baseUrl = "https://newsapi.org/v2/";
const keyApi = "370ef054d39243f894b442fd88c40a52"
const search = "soccer"
const country = "us"

const urlHeadline = baseUrl + "everything?q=" + search + "&apiKey=" + keyApi
const urlHeadline2 = baseUrl + "top-headlines?country="+ country + "&apiKey=" + keyApi
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      listNews:[],
      listTopNews: [],
      username:"",
      isLogin: false
    }
  }

  componentDidMount = () => {
  const self = this;
  axios
    .get(urlHeadline)
    .then(function(response){
      self.setState({listNews: response.data.articles})
      console.log(response.data)
    })
    .catch(function(error) {
      console.log(error)
    })
  axios
  .get(urlHeadline2)
  .then(function(response){
    self.setState({listTopNews: response.data.articles})
    console.log(response.data)
  })
  .catch(function(error) {
    console.log(error)
  })
}
  render() {
    const {listNews, listTopNews, username, isLogin} = this.state;
    return (
  <div>
    <div class="container">
    <Header />
    <Search />
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

export default App;