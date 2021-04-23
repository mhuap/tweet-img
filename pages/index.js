import React from "react";
import axios from 'axios';
import Head from 'next/head';
import { scroller } from 'react-scroll';
// import SEO from "../components/seo"
import Result from '../components/result';
import Arrow from '../components/arrow.js';

const serverErrorMsg = 'Server Error';

class IndexPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        loading: false,
        blank: true,
        error: false,
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
      const tweet = response.data.data[0];

      let media;
      if (tweet.attachments){
        media = response.data.includes.media[0].url;
      } else {
        media = null;
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
        loading: false
      });

      // console.log('not loading')

    })
    .catch(error => {

      this.setState({
        tweet: serverErrorMsg,
        loading: false
      });

      // console.log('not loading')
    })

  }

  handleSubmit(e){
    e.preventDefault();

    // console.log('Submitted');

    const tweetId = this.validate(this.urlInput.current.value);
    if (tweetId == 0){
      this.setState({
        blank: true,
        error: true
      });
    } else {
      this.setState({
          blank: false,
          error: false
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
      res = null;
    } else if (this.state.loading){
      res = <p id="loading">Loading...</p>;
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
        </Head>

        <div id='container'>
          <div id='form-wrapper'>
            <h1>tweet-img</h1>
            <p id='support'>Only tested on some kinds of tweets. <a target='__blank' href='https://github.com/mhuap/tweet-img/blob/master/README.md#tweet-support'>See what kinds of tweets we support.</a></p>
            <form id='top-form' onSubmit={this.handleSubmit}>
              <label>Enter Tweet URL</label>
              <div id='form-input' className={this.state.error ? 'error' : ''}>
                <input id='url-input'type='text' ref={this.urlInput} name='url' placeholder='twitter.com/status/tweeturl'/>
                <button className='input-overlay'>
                  <Arrow/>
                </button>
              </div>
              <p id='error'>{this.state.error ? 'Not a tweet URL' : ''}</p>
            </form>
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
