import React from "react";
import axios from 'axios';
import Head from 'next/head';
import { scroller } from 'react-scroll';
const getTweet = require("../scraper-client.js");
// import SEO from "../components/seo"
import Result from '../components/result';
import Arrow from '../components/arrow.js';
import '../scss/index.scss';

const errormsg = 'Error: 404 Invalid URL';
const ASSET_PREFIX = '/tweet-img';

class IndexPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        loading: false,
        blank: true,
        tweet: '',
        error: false
    };

    this.result = React.createRef();
    this.urlInput = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validate = this.validate.bind(this);
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

    const validatedUrl = this.validate(this.urlInput.current.value);
    if (validatedUrl == 0){
      this.setState({
        blank: true,
        error: true
      });
    } else {
      this.setState({
          blank: false,
          error: false
      }, () => {
        this.createTweet(validatedUrl);
      });
    }

  }

  validate(urlInput){
    const regexMobile = /(https:\/\/)?mobile.twitter.com\/([a-z]|[A-Z]|\d|_){0,15}\/status\/\d{19}/g
    const regexGen = /(https:\/\/)?(www)?twitter.com\/([a-z]|[A-Z]|\d|_){0,15}\/status\/\d{19}/g

    let newInput;
    const mobile = regexMobile.exec(urlInput);
    if (mobile) {
      newInput = urlInput.replace('mobile', 'www');
    } else {
      const valid = regexGen.exec(urlInput);

      if(valid){
        newInput = urlInput;
      } else {
        newInput = 0;
      }
    }

    return newInput;

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
        <Head>
          <title>tweet-img</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport"/>
          <meta name="description" content="Generate image from tweets"/>
          <meta name="keywords" content="Twitter,Image,Background,Tweet,Instagram,Social,Media"/>
          <meta name="author" content="Matias Huapaya"/>
          <link rel="shortcut icon" href={ASSET_PREFIX + "/logo-bgwhite.png"} />
          <meta property="og:title" content="tweet-img"/>
          <meta property="og:description" content="Offering tour packages for individuals or groups."/>
          <meta property="og:image" content="https://mhuap.github.io/tweet-img/example.png"/>
          <meta property="og:url" content="https://mhuap.github.io/tweet-img"/>
          <meta property="og:site_name" content="tweet-img"/>
          <meta name="twitter:card" content="summary_large_image"/>
        </Head>

        <div id='container'>
          <div id='form-wrapper'>
            <h1>tweet-img</h1>
            <p id='support'>Only tested on some tweets. <a target='__blank' href='https://github.com/mhuap/tweet-img/blob/master/README.md#tweet-support'>See what kinds of tweets we support.</a></p>
            <form id='top-form' onSubmit={this.handleSubmit}>
              <label>Enter Tweet URL</label>
              <div id='form-input' className={this.state.error ? 'error' : ''}>
                <input id='url-input'type='text' ref={this.urlInput} name='url' placeholder='twitter.com/status/tweeturl'/>
                <button><Arrow/></button>
              </div>
              {this.state.error ? <p id='error'>Not a tweet URL</p> : null}
            </form>
          </div>

          <div id='result-wrapper' ref={this.result}>
            {res}
          </div>

        </div>
        <footer>
          Created by <a href='https://twitter.com/matias_huapaya'>Matias Huapaya</a>
        </footer>
      </>
    );
  }
}

export default IndexPage
