import createStore from 'unistore'
import axios from 'axios';

const initialState = {
    api_key : "",
    username : "",
    password : "",
    email: "",
    full_name: "",
    is_login: false,
    listNews: [],
    listTopNews: [],
}

export const store = createStore(initialState)

export const actions = store => ({
    setField: (state, e) => {
        return {[e.target.name]: e.target.value};
    },
    postSignout: state => {
        return {is_login : false};
    },
    postLogin: async state => {
        const data = {username:state.username, password:state.password};
        await axios
        .post("https://pajar.free.beeceptor.com/auth", data)
        .then(response => {
          console.log(response.data);
          if (response.data.hasOwnProperty("api_key")) {
            store.setState({
                is_login : true,
                api_key: response.data.api_key,
                full_name: state.username,
                email: "pajar@gmail.com",})
            }
        })
    },
    newsBlog: async state => {
        const data = {
          listNews: state.listNews,
          listTopNew: state.listTopNew
        };
        await axios
          .all([
            axios.get("https://newsapi.org/v2/everything?q=sport&apiKey=79ea232ad60645a8a122c07c03321932"), 
            axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=79ea232ad60645a8a122c07c03321932")
          ])
          .then(
            axios.spread(function(response1, response2) {
              store.setState({ listNews: response1.data.articles });
              store.setState({ listTopNews: response2.data.articles });
            })
          )
          .catch(function(error) {});
    },
    searchNews : async (value, keyword) => {
        if (keyword.length > 2){
          try {
            const response = await axios.get(
                "https://newsapi.org/v2/everything?q=" + keyword + "&apiKey=79ea232ad60645a8a122c07c03321932"
            )
            console.log(response);
            store.setState({listNews: response.data.articles})
          }catch (error){
            console.log(error);
          }
        }
    },
    searchCategory : async (value, keyword) => {
        try {
          const response = await axios.get(
            "https://newsapi.org/v2/everything?q=" + keyword + "&apiKey=79ea232ad60645a8a122c07c03321932"
        )
          console.log(response);
          store.setState({listNews: response.data.articles})
        }catch (error){
          console.log(error);
        }
      },
})
