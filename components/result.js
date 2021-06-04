import React, { useState, useRef, useEffect }from "react";

import { scroller } from 'react-scroll';

import Tweet from './tweet';
import BackgroundPicker from './backgroundPicker';
import SideBar from './sideBar';
import PhotoUpload from './photoUpload';

const serverErrorMsg = 'Twitter server error';

function Result(props){
  const [colorMode, setColorMode] = useState(true);
  const [bgColor, setBgColor] = useState('#E1E8ED');

  const [bgImg, setBgImg] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [resultImg, setResultImg] = useState(null);

  const [boxRounded, setBoxRounded] = useState(true);
  const [boxBorder, setBoxBorder] = useState(false);

  const [modalShow, setModalShow] = React.useState(false);

  const imageUrlRef = useRef();

  const handleColorChange = (color, event) => setBgColor(color.hex);

  const onFileChange = () => {
    const file = event.target.files[0];
    setSelectedFile(file);

    var reader = new FileReader();
    reader.onload = function(event) {
      setBgImg(event.target.result)
    };;

    reader.readAsDataURL(file);
    setModalShow(false);
  }

  const onClickAddImage = () => {
    setModalShow(true);
    setColorMode(false);
  }

  const onClickTrash = () => {
    setColorMode(true);
    setSelectedFile(null);
    setBgImg(null);
  }

  const genCanvas = () => {
    const html2canvas = require('html2canvas');

    // necessary for proper image creation with html2canvas
    // window.scrollTo({ top: 0})

    // Hide scrollbar to fix bug with html2canvas which adds extra whitespace to image if scrollbar is present
    document.documentElement.style.overflow = 'hidden';

    return html2canvas(document.querySelector("#preview .sq-container"),
      {
        allowTaint: false,
        useCORS: true,
        backgroundColor: null,
        logging: false,
      })
    .then((canvas) => {
      scroller.scrollTo('result-wrapper', {
        smooth: true,
      })

      // Un-hide scrollbar
      document.documentElement.style.overflow = '';

      // const src = canvas.toDataURL();
      return canvas.toBlob((blob) => {
        const href = URL.createObjectURL(blob);
        setResultImg(href);

      },'image/png')
    })
  }

  const imgClick = async e => {
    e.preventDefault();
    await genCanvas();
    return false
  }

  const useImageURL = (e) => {
    e.preventDefault();

    const src = imageUrlRef.current.value;
    setSelectedFile({name: 'Image from URL'});
    setBgImg(src);
    setModalShow(false);
  }

  // console.log(props.tweet);
  if (props.mainTweet === serverErrorMsg){
    return <p>{serverErrorMsg}</p>
  }

  let bgSection;
  let bgStyle = {
    backgroundColor: bgColor
  };

  if (bgImg && !colorMode) {
    bgStyle.backgroundImage = `url(${bgImg})`;
  }


  let content;

  if (resultImg){
    content =<div style={{maxWidth: '530px', margin: '0 auto'}}>
    <small>Click image to download</small>
    <a href={resultImg} download='tweet'>
      <img
        id='tweet-img'
        src={resultImg}
        alt={`Tweet that says: ${props.mainTweet.tweet.text}`}
      />
    </a>

      <small id='backup-link'>or <a href={resultImg} download="tweet">download here</a></small>
    </div>
  } else {
    content = <>
      <div id='preview'>
        <label className='section'>Preview</label>
        <div className='sq-container-container'>
          <div className='sq-container' style={bgStyle}>
            <Tweet
              tweet={props.mainTweet.tweet}
              user={props.mainTweet.user}
              quoted={props.quoted}
              boxRounded={boxRounded}
              boxBorder={boxBorder}
            />
          </div>
        </div>
      </div>

      <SideBar
        onSubmit={imgClick}
        onSwitchRounded={() => setBoxRounded(!boxRounded)}
        onSwitchBorder={() => setBoxBorder(!boxBorder)}
      >
        <BackgroundPicker
          onChange = {handleColorChange}
          color={bgColor}
          onClickAddImage={onClickAddImage}
          onClickTrash={onClickTrash}
          fileName={selectedFile ? selectedFile.name : null}
        />

        <PhotoUpload
          show={modalShow}
          onHide={() => setModalShow(false)}
          onFileChange={onFileChange}
          useImageURL={useImageURL}
          imgRef={imageUrlRef}
        />

      </SideBar>
    </>
  }

  return <div id='result'>{content}</div>;
}



export default Result;
