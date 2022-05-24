import React, { useState } from "react";
import regexifyString from "regexify-string";

import Poll from './poll.js';

const verifiedIcon = <img id='badge' src='/verified.png'/>

function Tweet(props){

  const verified = props.user.verified ? verifiedIcon : null;

  let tweetText = props.tweet.text;

  let media;

  if (props.tweet.media){
    const imgCount = props.tweet.media.length;

    // remove attachment urls from tweet text
    for (var i = 0; i < imgCount; i++){
      const urlIndex = props.tweet.text.lastIndexOf('https://t.co/');
      tweetText = props.tweet.text.slice(0, urlIndex);
    }

    if (imgCount == 1){
      // assuming there is only 1 image
      if (props.imageCrop){
        media = <div className='tweet-media media-1' style={{backgroundImage: `url(${props.tweet.media[0]})`}}></div>
      } else {
        media = <div className='tweet-media'><img crossOrigin="*" src={props.tweet.media[0]}/></div>
      }
    } else if (imgCount == 2){
      media = <div className='tweet-media media-2'>
        <div className='media-grid'>
          <div style={{backgroundImage: `url(${props.tweet.media[0]})`}}></div>
          <div style={{backgroundImage: `url(${props.tweet.media[1]})`}}></div>
        </div>
      </div>;
    } else if (imgCount == 3){
      media = <div className='tweet-media media-3'>
        <div className='media-grid'>
          <div style={{backgroundImage: `url(${props.tweet.media[0]})`, gridRow: '1 / 3'}}></div>
          <div style={{backgroundImage: `url(${props.tweet.media[1]})`}}></div>
          <div style={{backgroundImage: `url(${props.tweet.media[2]})`}}></div>
        </div>
      </div>;
    } else if (imgCount == 4){
      media = <div className='tweet-media media-4'>
        <div className='media-grid'>
          <div style={{backgroundImage: `url(${props.tweet.media[0]})`}}></div>
          <div style={{backgroundImage: `url(${props.tweet.media[1]})`}}></div>
          <div style={{backgroundImage: `url(${props.tweet.media[2]})`}}></div>
          <div style={{backgroundImage: `url(${props.tweet.media[3]})`}}></div>
        </div>
      </div>;
    }
  }

  // unencode html entities
  const doc = new DOMParser().parseFromString(tweetText, "text/html");
  tweetText = doc.documentElement.textContent;

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

  if (blueArr.length && props.boxBackground){
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
        return <span className='blue' key={"blue " + index}>{content}</span>;
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
    borderRadius: props.boxRounded ? '0.75rem' : '0',
    borderStyle: props.boxBorder ? 'solid': 'none',
    background: props.boxBackground ? 'white' : 'none',
    color: props.boxText ? props.boxText.color : '#000',
    borderColor: props.boxText ? props.boxText.color : '#14171a',
    boxShadow: props.boxShadow ? 'rgba(0,0,0,0.1) 0px 8px 24px 0px' : 'none',
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

      quotedMedia = <div className='tweet-media media-1' style={{backgroundImage: `url(${quoted.tweet.media})`}}></div>
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
