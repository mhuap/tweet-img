import React from "react";
import axios from 'axios';
import { scroller } from 'react-scroll';
const getTweet = require("../scraper-client.js");
// import SEO from "../components/seo"
import Result from '../components/result';
import Arrow from '../components/arrow.js';
import '../scss/index.scss';

const errormsg = 'Error: 404 Invalid URL';
const ASSET_PREFIX = '/tweet-img/';

class IndexPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        loading: false,
        // url: '',
        blank: true,
        tweet: ''
    };

    this.result = React.createRef();
    this.urlInput = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  createTweet(url){
    console.log('axios');

    this.setState({
      loading: true
    })
    console.log('loading')

    // SERVER-SIDE
    // axios.post('/api', {
    //   url: url
    // })
    axios.post('https://us-central1-tweet-img.cloudfunctions.net/scraper', {
      url: url
    })
    .then(response => {
      console.log('response')
      // console.log(response)

      this.setState({
        tweet: response.data,
        loading: false
      });

      console.log('not loading')

    })
    .catch(error => {

      this.setState({
        tweet: errormsg,
        loading: false
      });

      console.log('not loading')
    })

  }

  handleSubmit(e){
    e.preventDefault();

    scroller.scrollTo('result-wrapper', {
      smooth: true,
    })

    console.log('Submitted');
    this.setState({
        blank: false
    }, () => this.createTweet(this.urlInput.current.value));

  }


  render(){
    var res;
    if (this.state.blank){
      res = null;
    } else if (this.state.loading){
      res = <p>Loading...</p>;
    } else {
      res = <Result blank={this.state.blank} tweet={this.state.tweet}/>;
    }
    return (
      <>
        <div id='container'>
          <div id='form-wrapper'>
            <h1>tweet-img</h1>
            <p>Only tested on some tweets. <a target='__blank' href='https://github.com/mhuap/tweet-img/blob/master/README.md#tweet-support'>See what kinds of tweets we support.</a></p>
            <form id='top-form' onSubmit={this.handleSubmit}>
              <label>Enter Tweet URL</label>
              <div id='form-input'>
                <input id='url-input'type='text' ref={this.urlInput} name='url' placeholder='twitter.com/status/tweeturl'/>
                <button><Arrow/></button>
              </div>
            </form>
          </div>

          <div id='result-wrapper' ref={this.result}>
            {res}
          </div>

        </div>
        <footer>
          <small>Created by <a href='https://twitter.com/matias_huapaya'>Matias Huapaya</a></small>
        </footer>
      </>
    );
  }
}

export default IndexPage
