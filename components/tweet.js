import React, { useState } from "react";
import regexifyString from "regexify-string";

// const verifiedIcon = <svg id='badge' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 72"> <path fill="none" d="M0 0h64v72H0z"/> <path fill="#1da1f2" class="icon" d="M3 37.315c0 4.125 2.162 7.726 5.363 9.624-.056.467-.09.937-.09 1.42 0 6.103 4.72 11.045 10.546 11.045 1.295 0 2.542-.234 3.687-.686C24.22 62.4 27.827 64.93 32 64.93c4.174 0 7.782-2.53 9.49-6.213 1.148.45 2.39.685 3.69.685 5.826 0 10.546-4.94 10.546-11.045 0-.483-.037-.953-.093-1.42C58.83 45.04 61 41.44 61 37.314c0-4.37-2.42-8.15-5.933-9.946.427-1.203.658-2.5.658-3.865 0-6.104-4.72-11.045-10.545-11.045-1.302 0-2.543.232-3.69.688-1.707-3.685-5.315-6.216-9.49-6.216-4.173 0-7.778 2.53-9.492 6.216-1.146-.455-2.393-.688-3.688-.688-5.827 0-10.545 4.94-10.545 11.045 0 1.364.23 2.662.656 3.864C5.42 29.163 3 32.944 3 37.314z"/><path fill="#FFF" d="M17.87 39.08l7.015 6.978c.585.582 1.35.873 2.116.873.77 0 1.542-.294 2.127-.883.344-.346 15.98-15.974 15.98-15.974 1.172-1.172 1.172-3.07 0-4.243-1.17-1.17-3.07-1.172-4.242 0l-13.87 13.863-4.892-4.868c-1.174-1.168-3.074-1.164-4.242.01-1.168 1.176-1.163 3.075.01 4.244z"/></svg>;
import Poll from './poll.js';

const verifiedIcon = <img id='badge' src='/verified.png'/>

function Tweet(props){

  const verified = props.user.verified ? verifiedIcon : null;

  let tweetText = props.tweet.text;

  let media;
  console.log(props.tweet.media);
  if (props.tweet.media){


    const imgCount = props.tweet.media.length;

    // remove attachment urls from tweet text
    for (var i = 0; i < imgCount; i++){
      const urlIndex = props.tweet.text.lastIndexOf('https://t.co/');
      tweetText = props.tweet.text.slice(0, urlIndex);
    }

    if (imgCount == 1){
      // assuming there is only 1 image
      media = <div className='tweet-media'><img crossOrigin="*" src={props.tweet.media[0]}/></div>
    } else if (imgCount == 2){
      media = <div className='tweet-media media-2'>
        <div style={{backgroundImage: `url(${props.tweet.media[0]})`}}></div>
        <div style={{backgroundImage: `url(${props.tweet.media[1]})`}}></div>
      </div>;
    } else {
      media = 'more than 2 images unsupported'
    }
  }

  let blueArr = [];

  if (props.tweet.urls){
    const urls = Object.keys(props.tweet.urls);
    for (let i = 0; i < urls.length; i++){
      const escaped = urls[i].replace(/\//g, '\\\/');
      blueArr.push(escaped);
    }
  }

  if (props.tweet.mentionsAndTags){
    const ent = props.tweet.mentionsAndTags;
    for (let i = 0; i < ent.length; i++){
      blueArr.push(ent[i]);
    }
  }

  if (blueArr.length){
    const blueStr = blueArr.join('|');
    const regex = new RegExp(blueStr,"g");
    const result = regexifyString({
      pattern: regex,
      decorator: (match, index) => {
        let content = match;
        if (match.includes('https://t.co')){
          if (props.tweet.urls[match].includes('twitter.com')){
            content = '';
          } else {
            content = props.tweet.urls[match];
          }
        }
        return <span className='blue' key={index}>{content}</span>;
      },
      input: tweetText,
    });

    let key = 0;
    tweetText = result.map((item) => {
      if (typeof item === 'string' || item instanceof String){
        key = key + 1;
        return <span dangerouslySetInnerHTML={{__html: `${item}`}} key={key}></span>
      }
      else {
        return item;
      }
    })
  }

  let boxStyle = {
    borderRadius: props.boxRounded ? '0.5rem' : '0',
    borderStyle: props.boxBorder ? 'solid': 'none',
    background: props.boxBackground ? 'white' : 'none',
    color: props.boxText ? props.boxText.color : '#000',
    borderColor: props.boxText ? props.boxText.color : '#14171a'
  }


  // console.log(props.tweet.poll);

  const quoted = props.quoted;

  let quotedDiv = null;
  if (quoted){

    let quotedText = quoted.tweet.text;
    let quotedMedia = null;
    if (quoted.tweet.media){
      // remove attachment urls from tweet text
      const urlIndex = quoted.tweet.text.lastIndexOf('https://t.co/');
      quotedText = quoted.tweet.text.slice(0, urlIndex);

      quotedMedia = <div className='tweet-media quoted-tweet-media'><img crossOrigin="*" src={quoted.tweet.media}/></div>
    }

    quotedDiv = <div id='quoted'>
      <div>
        <img className='avatar' crossOrigin='*' src={quoted.user.img} />
        <div className='account-group'>
          <div className='name'>
            <span><b>{quoted.user.name}</b></span>
            {verified}
          </div>
          <span className='username'>{quoted.user.username}</span>
        </div>
      </div>

      <div className='tweet-text'>{quotedText}</div>
      {quotedMedia}

    </div>
  }

  return (
    <div id='tweet' style={boxStyle}>
      <div>
        <img className='avatar' crossOrigin='*' src={props.user.img} />
        <div className='account-group'>
          <div className='name'>
            <span><b>{props.user.name}</b></span>
            {verified}
          </div>
          <span className='username' style={props.boxText ? {color: props.boxText.color} : '' }>{props.user.username}</span>
        </div>
      </div>
      <div className='tweet-text'>{tweetText}</div>

      {media}
      {quotedDiv}
      {(props.tweet.poll === undefined) || (JSON.stringify(props.tweet.poll) === JSON.stringify({})) ? null : <Poll poll={props.tweet.poll}/>}


      <div className='date' style={props.boxText ? {color: props.boxText.color} : '' }>{props.tweet.date}</div>
    </div>
  )
}

// {props.quoted.tweet.text}

export default Tweet;
