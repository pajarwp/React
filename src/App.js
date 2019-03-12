import React, { Component } from 'react';
import Search from './Search/Search'
import Navigation from './Navigation/Navigation'
import News from './News/news'
import TopNews from './News/topnews'
import axios from 'axios';

const imgNull = 0;

const baseUrl = "https://newsapi.org/v2/";
const keyApi = "370ef054d39243f894b442fd88c40a52"
const search = "sport"
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

handleInputChange = e => {
  console.log("event", e.target.value);
  let value = e.target.value;

  this.setState(
    {
      search: value
    },
    () => {
      this.searchNews(value);
    }
  )
}
handleClick = e => {
  console.log("event", e);
  let basketball = "Basketball"
  this.setState(
    () => {
      this.searchCategory(basketball);
    }
  )
}
handleClick1 = e => {
  console.log("event", e);
  let volleyball = "Volleyball"
  this.setState(
    () => {
      this.searchCategory(volleyball);
    }
  )
}
handleClick2 = e => {
  console.log("event", e);
  let football = "Football"
  this.setState(
    () => {
      this.searchCategory(football);
    }
  )
}
searchCategory = async value => {
  console.log("searchCategory", value);
  const self = this ;
  try {
    const response = await axios.get(
      baseUrl + "everything?q=" + value + "&apiKey=" + keyApi
    )
    console.log(response);
    self.setState({listNews: response.data.articles})
  }catch (error){
    console.log(error);
  }
}
searchNews = async keyword => {
  console.log("searchNews", keyword);
  const self = this;
  if (keyword.length > 2){
    try {
      const response = await axios.get(
        baseUrl + "everything?q=" + keyword + "&apiKey=" + keyApi
      )
      console.log(response);
      self.setState({listNews: response.data.articles})
    }catch (error){
      console.log(error);
    }
  }
}
  render() {
    const {listNews, listTopNews, username, isLogin} = this.state;
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

export default App;