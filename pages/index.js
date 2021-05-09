import React from "react";

import axios from 'axios';
import Head from 'next/head';
import { scroller } from 'react-scroll';
import Spinner from 'react-bootstrap/Spinner';

import Result from '../components/result';
import Arrow from '../components/arrow.js';
// import diagram from '../public/diagram.png';

const serverErrorMsg = 'Server Error';

class IndexPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        loading: false,
        blank: true,
        inputError: false,
        serverError: null,
        tweet: {
          text: '',
          date: null,
          media: null,
          urls: null,
          other: null,
        },
        user: {
          username: '',
          name: '',
          verified: false,
          img: null,
        },
    };

    this.result = React.createRef();
    this.urlInput = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validate = this.validate.bind(this);
  }

  createTweet(url){
    // console.log('axios');

    this.setState({
      loading: true
    })
    // console.log('loading')

    // SERVER-SIDE
    axios.post('/api/tweet', {
      tweetId: url
    })
    .then(response => {
      // console.log('response')
      const res = response.data;
      if (res.errors){
        throw new Error(res.errors[0].detail);
      }
      const tweet = res.data[0];

      let media;
      if (tweet.attachments){
        const mediaData = response.data.includes.media;
        media = mediaData.map((x) => (x.type == 'photo') ? x.url : null);
      }

      // console.log(media)

      const user = response.data.includes.users[0];

      const tweetUrls = {};
      const other = [];

      if (tweet.entities){

        // URLs
        if (tweet.entities.urls){
          const urls = tweet.entities.urls;
          for (let i = 0; i < urls.length; i++){
            if (!urls[i].display_url.includes('pic.twitter.com')){
              tweetUrls[urls[i].url] = urls[i].display_url;
            }
          }
        }

        if (tweet.entities.mentions){
          const mentions = tweet.entities.mentions;
          for (let i = 0; i < mentions.length; i++){
            other.push('@' + mentions[i].username);
          }
        }

        if (tweet.entities.hashtags){
          const hashtags = tweet.entities.hashtags;
          for (let i = 0; i < hashtags.length; i++){
            other.push('#' + hashtags[i].tag);
          }
        }

      }

      // console.log(tweetUrls);

      this.setState({
        tweet: {
          text: tweet.text,
          date: tweet.created_at,
          media: media,
          urls: tweetUrls,
          other: other,
        },
        user: {
          username: user.username,
          name: user.name,
          verified: user.verified,
          img: user.profile_image_url,
        },
        loading: false,
        serverError: null
      });

      // console.log('not loading')

    })
    .catch(error => {

      console.log(error)

      this.setState({
        loading: false,
        serverError: error.message
      });
    })

  }

  handleSubmit(e){
    e.preventDefault();

    // console.log('Submitted');

    const tweetId = this.validate(this.urlInput.current.value);
    if (tweetId == 0){
      this.setState({
        blank: true,
        inputError: true
      });
    } else {
      this.setState({
          blank: false,
          inputError: false
      }, () => {
        this.createTweet(tweetId);
      });
    }

  }

  validate(urlInput){
    const regexMobile = /(https:\/\/)?mobile.twitter.com\/([a-z]|[A-Z]|\d|_){0,15}\/status\/(\d{1,19})/g
    const regexGen = /(https:\/\/)?(www)?twitter.com\/([a-z]|[A-Z]|\d|_){0,15}\/status\/(\d{1,19})/g

    let newInput;
    const mobile = regexMobile.exec(urlInput);
    if (mobile) {
      newInput = mobile[3];
    } else {
      const valid = regexGen.exec(urlInput);

      if(valid){
        newInput = valid[4];
      } else {
        newInput = 0;
      }
    }

    return newInput;

  }


  render(){
    var res;
    if (this.state.blank){
      res = <div id='result'><img id='diagram' src='diagram.png'/></div>;
    } else if (this.state.loading){
      res = <Spinner animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>;
    } else if (this.state.serverError){
      res = <span className='error-text'>{this.state.serverError}</span>
    } else {
      res = <Result blank={this.state.blank} tweet={this.state.tweet} user={this.state.user}/>;
      // res = this.state.tweet.text;
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
          <link rel="shortcut icon" href="https://tweet-img.vercel.app/logo-bgwhite.png"/>
          <meta property="og:title" content="tweet-img"/>
          <meta property="og:description" content="Generate images from tweets."/>
          <meta property="og:image" content="	https://tweet-img.vercel.app/example.png"/>
          <meta property="og:url" content="	https://tweet-img.vercel.app"/>
          <meta property="og:site_name" content="tweet-img"/>
          <meta name="twitter:card" content="summary_large_image"/>
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
            integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
            crossOrigin="anonymous"
          />
        </Head>

        <div id='container'>
          <div id='form-wrapper'>
            <a id='site-name' href='https://tweet-img.vercel.app/'>tweet-img</a>
            <h1>Transform tweet links into colorful graphics</h1>
            <p id='support'>Only tested on <a target='__blank' href='https://github.com/mhuap/tweet-img/projects/5'>some kinds</a> of tweets.</p>
            <form id='top-form' onSubmit={this.handleSubmit}>
              <label className='section'>Enter tweet link</label>
              <div id='form-input' className={this.state.inputError ? 'error' : ''}>
                <input id='url-input' type='text' ref={this.urlInput} name='url' placeholder='twitter.com/status/tweetlink'/>
                <button className='input-overlay'>
                  <Arrow/>
                </button>
              </div>
              <p className='error-text'>{this.state.inputError ? 'Not a tweet URL' : ''}</p>
            </form>
            <div id='top-line'></div>
          </div>


          <div id='result-wrapper' ref={this.result}>
            {res}
          </div>

        </div>
        <footer>
          Created by <a href='https://twitter.com/matias_huapaya'>Matias Huapaya</a>.
        </footer>
      </>
    );
  }
}

export default IndexPage
