import React, { useState, useRef } from "react";

import axios from 'axios';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { scroller } from 'react-scroll';
import Spinner from 'react-bootstrap/Spinner';

import Result from '../components/result';
import Arrow from '../components/arrow.js';
import TweetEntity from '../components/tweetEntity.js';
// import diagram from '../public/diagram.png';

function validate(urlInput){
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

function IndexPage() {
  const [loading, setLoading] = useState(false);
  const [blank, setBlank] = useState(true);
  const [inputError, setInputError] = useState(false);
  const [serverError,setServerError] = useState(null);
  const [urlQuery, setUrlQuery] = useState(null);
  const [mainTweet, setMainTweet] = useState(new TweetEntity());
  const [quoted, setQuoted] = useState(new TweetEntity());

  const result = useRef(null);
  const urlInput = useRef(null);

  const router = useRouter();

  const createTweet = (url) => {
    // console.log('axios');
    setLoading(true);
    // console.log('loading')

    // SERVER-SIDE
    axios.get('/api/tweet', {
      params: {
        tweetId: url
      }
    })
    .then(response => {
      // console.log('response')

      const res = response.data;
      if (res.errors){
        throw new Error(res.errors);
      }

      setMainTweet(res.tweet.main);
      setQuoted(res.tweet.quoted);
      setLoading(false);
      setServerError(null);

    })
    .catch(error => {

      setLoading(false);
      setServerError(error.message);

    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    scroller.scrollTo('result-wrapper', {
      smooth: true,
    })

    const tweetId = validate(urlInput.current.value);
    if (tweetId == 0){
      setBlank(true);
      setInputError(true);
    } else {
      setBlank(false);
      setInputError(false);
      createTweet(tweetId);
    }
  }

  var res;
  if (blank){
    res = <div id='result'><img id='diagram' src='diagram.png'/></div>;
  } else if (loading){
    res = <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>;
  } else if (serverError){
    res = <span className='error-text'>{serverError}</span>
  } else {
    res = <Result blank={blank} mainTweet={mainTweet} quoted={quoted}/>;
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
        <link rel="shortcut icon" href="https://tweet-img.vercel.app/twitterlogoblue.png"/>
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
        <link rel="manifest" href="manifest.json"/>

        <link
          href="/icons/maskable_icon_x48.png"
          rel="icon"
          type="image/png"
          sizes="48x48"
        />
        <link
          href="/icons/maskable_icon_x72.png"
          rel="icon"
          type="image/png"
          sizes="72x72"
        />

        <link rel='apple-touch-icon' href='/apple-icon.png'></link>
        <meta name='theme-color' content='#1DA1F2' />
      </Head>

      <div id='container'>
        <div id='form-wrapper'>
          <a id='site-name' href='https://tweet-img.vercel.app/'>tweet-img</a>
          <h1>Transform tweet links into colorful graphics</h1>
          <p id='support'>Only tested on <a target='__blank' href='https://github.com/mhuap/tweet-img/projects/5'>some kinds</a> of tweets.</p>
          <form id='top-form' onSubmit={handleSubmit}>
            <label className='section'>Enter tweet link</label>
            <div id='form-input' className={inputError ? 'error' : ''}>
              <input id='url-input'
                type='text'
                ref={urlInput}
                name='url'
                placeholder='twitter.com/status/tweetlink'
                defaultValue={router.query.tweet ? router.query.tweet : '' }
                />
              <button className='input-overlay'>
                <Arrow/>
              </button>
            </div>
            <p className='error-text'>{inputError ? 'Not a tweet URL' : ''}</p>
          </form>
          <div id='top-line'></div>
        </div>

        <div id='result-wrapper' ref={result}>
          {res}
        </div>

      </div>
      <footer>
        Created by <a href='https://twitter.com/matias_huapaya'>Matias Huapaya</a>.
      </footer>
    </>
  );
}

export default IndexPage
