import React, { useState } from "react";
import regexifyString from "regexify-string";

// const twitterLogo = <svg id='logo' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72"><path fill="none" d="M0 0h72v72H0z"/><path class="icon" fill="#1da1f2" d="M68.812 15.14c-2.348 1.04-4.87 1.744-7.52 2.06 2.704-1.62 4.78-4.186 5.757-7.243-2.53 1.5-5.33 2.592-8.314 3.176C56.35 10.59 52.948 9 49.182 9c-7.23 0-13.092 5.86-13.092 13.093 0 1.026.118 2.02.338 2.98C25.543 24.527 15.9 19.318 9.44 11.396c-1.125 1.936-1.77 4.184-1.77 6.58 0 4.543 2.312 8.552 5.824 10.9-2.146-.07-4.165-.658-5.93-1.64-.002.056-.002.11-.002.163 0 6.345 4.513 11.638 10.504 12.84-1.1.298-2.256.457-3.45.457-.845 0-1.666-.078-2.464-.23 1.667 5.2 6.5 8.985 12.23 9.09-4.482 3.51-10.13 5.605-16.26 5.605-1.055 0-2.096-.06-3.122-.184 5.794 3.717 12.676 5.882 20.067 5.882 24.083 0 37.25-19.95 37.25-37.25 0-.565-.013-1.133-.038-1.693 2.558-1.847 4.778-4.15 6.532-6.774z"/></svg>;
// const verifiedIcon = <svg id='badge' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 72"> <path fill="none" d="M0 0h64v72H0z"/> <path fill="#1da1f2" class="icon" d="M3 37.315c0 4.125 2.162 7.726 5.363 9.624-.056.467-.09.937-.09 1.42 0 6.103 4.72 11.045 10.546 11.045 1.295 0 2.542-.234 3.687-.686C24.22 62.4 27.827 64.93 32 64.93c4.174 0 7.782-2.53 9.49-6.213 1.148.45 2.39.685 3.69.685 5.826 0 10.546-4.94 10.546-11.045 0-.483-.037-.953-.093-1.42C58.83 45.04 61 41.44 61 37.314c0-4.37-2.42-8.15-5.933-9.946.427-1.203.658-2.5.658-3.865 0-6.104-4.72-11.045-10.545-11.045-1.302 0-2.543.232-3.69.688-1.707-3.685-5.315-6.216-9.49-6.216-4.173 0-7.778 2.53-9.492 6.216-1.146-.455-2.393-.688-3.688-.688-5.827 0-10.545 4.94-10.545 11.045 0 1.364.23 2.662.656 3.864C5.42 29.163 3 32.944 3 37.314z"/><path fill="#FFF" d="M17.87 39.08l7.015 6.978c.585.582 1.35.873 2.116.873.77 0 1.542-.294 2.127-.883.344-.346 15.98-15.974 15.98-15.974 1.172-1.172 1.172-3.07 0-4.243-1.17-1.17-3.07-1.172-4.242 0l-13.87 13.863-4.892-4.868c-1.174-1.168-3.074-1.164-4.242.01-1.168 1.176-1.163 3.075.01 4.244z"/></svg>;


var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const verifiedIcon = <img id='badge' src='/verified.png'/>

function Tweet(props){


  const iso = new Date(props.tweet.date);
  const month = monthNames[iso.getMonth()];
  const date = iso.getDate();
  const year = iso.getFullYear();
  const fullDate = `${date} ${month} ${year}`;

  const verified = props.user.verified ? verifiedIcon : null;

  let tweetText = props.tweet.text;

  let media
  if (props.tweet.media){

    const imgCount = props.tweet.media.length;

    // remove attachment urls from tweet text
    for (var i = 0; i < imgCount; i++){
      const urlIndex = props.tweet.text.lastIndexOf('https://t.co/');
      tweetText = props.tweet.text.slice(0, urlIndex);
    }

    if (imgCount == 1){
      // assuming there is only 1 image
      media = <div className='tweet-media'><img crossOrigin="*" src={props.tweet.media}/></div>
    } else if (imgCount == 2){
      media = <div className='tweet-media media-2'>
        <img crossOrigin="*" src={props.tweet.media[0]}/>
        <img crossOrigin="*" src={props.tweet.media[1]}/>
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

  if (props.tweet.other){
    const ent = props.tweet.other;
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
          content = props.tweet.urls[match];
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
    borderColor: props.boxBorder ? '#14171a' : 'white'
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
          <span className='username'>{props.user.username}</span>
        </div>
      </div>
      <div className='tweet-text'>{tweetText}</div>

      {media}

      <div className='date'>{fullDate}</div>
    </div>
  )
}

export default Tweet;
