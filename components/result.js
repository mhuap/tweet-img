import React, { useState, useRef, useEffect }from "react";
import axios from 'axios';
import { scroller } from 'react-scroll';
import * as htmlToImage from 'html-to-image';

import Tweet from './tweet';
import BackgroundPicker from './backgroundPicker';
import SideBar from './sideBar';
import PhotoUpload from './photoUpload';
import { GRADIENTS } from './gradientColor';

const serverErrorMsg = 'Twitter server error';

const blackFilter = `linear-gradient(
          rgba(0, 0, 0, 0.7),
          rgba(0, 0, 0, 0.7)
        ), `
const whiteFilter = `linear-gradient(
          rgba(255, 255, 255, 0.85),
          rgba(255, 255, 255, 0.85)
        ), `

function luminosity(color) {
  const colorRegex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color)
  const r = parseInt(colorRegex[1], 16)
  const g = parseInt(colorRegex[2], 16)
  const b = parseInt(colorRegex[3], 16)

  return Math.round(r*0.299 + g*0.587 + b*0.114);
}

function Result(props){
  const [colorMode, setColorMode] = useState(0);
  // 0 = solid, 1 = gradient, 2 = image

  const [bgGradient, setBgGradient] = useState(`linear-gradient(to bottom right, #00FF8F, #60EFFF)`);
  const [bgColor, setBgColor] = useState('#E1E8ED');
  const [gradient, setGradient] = useState('g1');

  const [bgImg, setBgImg] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [resultImg, setResultImg] = useState(null);
  const [imgFilter, setImgFilter] = useState('default');

  const [boxRounded, setBoxRounded] = useState(true);
  const [boxBorder, setBoxBorder] = useState(false);
  const [boxBackground, setBoxBackground] = useState(true);
  const [boxShadow, setBoxShadow] = useState(true);
  const [boxText, setBoxText] = useState(null);

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
    setColorMode(2);
  }

  const onClickTrash = () => {
    // setSolidColorMode(true);
    setSelectedFile(null);
    setBgImg(null);
    setImgFilter('default');
  }

  const genCanvas = () => {
    const node = document.querySelector("#preview .sq-container");
    // const node = document.getElementByID('form-input');
    const exportSize = 2;

    const width = node.offsetWidth * exportSize
    const height = node.offsetHeight * exportSize

    const config = {
      style: {
        transform: `scale(${exportSize})`,
        transformOrigin: 'top-left',
        width: 512 + "px",
        height: 512 + "px"
      },
      width,
      height,
    }

    htmlToImage.toPng(node)
    .then(function (dataUrl) {
        // var img = new Image();
        // img.src = dataUrl;
        // document.body.appendChild(img);
        setResultImg(dataUrl);
    })
    .catch(function (error) {
        console.error('dom-to-image: oops, something went wrong!', error);
    });


    // const html2canvas = require('html2canvas');
    //
    // // necessary for proper image creation with html2canvas
    // // window.scrollTo({ top: 0})
    //
    // // Hide scrollbar to fix bug with html2canvas which adds extra whitespace to image if scrollbar is present
    // document.documentElement.style.overflow = 'hidden';
    //
    // return html2canvas(document.querySelector("#preview .sq-container"),
    //   {
    //     allowTaint: false,
    //     useCORS: true,
    //     backgroundColor: null,
    //     logging: false,
    //   })
    // .then((canvas) => {
    //   scroller.scrollTo('result-wrapper', {
    //     smooth: true,
    //   })
    //
    //   // Un-hide scrollbar
    //   document.documentElement.style.overflow = '';
    //   // document.body.appendChild(canvas);
    //
    //   // const src = canvas.toDataURL();
    //   return canvas.toBlob((blob) => {
    //     const href = URL.createObjectURL(blob);
    //     setResultImg(href);
    //
    //   },'image/png')
    // })
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

  const unsplashPhotoClick = (e, download_location) => {
    e.preventDefault()

    const src = e.target.src;
    setSelectedFile({name: 'Unsplash image'});
    setBgImg(src);
    setModalShow(false);
    axios.post('/api/unsplash', {
      downloadLocation: download_location
    })
    .catch(error => console.log(error))
  }

  const onClickGradient = (a, b) => {
    setSelectedFile(null);
    setBgImg(null);
  }

  const handleGradientChange = (e) => {
    const g = e.target.value;

    setGradient(g);
    setBgGradient(`linear-gradient(to bottom right, ${GRADIENTS[g][0]}, ${GRADIENTS[g][1]})`);
  }

  // console.log(props.tweet);
  if (props.mainTweet === serverErrorMsg){
    return <p>{serverErrorMsg}</p>
  }

  let bgSection;
  let bgStyle = {background: bgColor};
  let textStyle = {color: null};

  if (colorMode == 0 && !boxBackground){
    const l = luminosity(bgColor);
    if (l >= 135){
      textStyle.color = '#000';
    } else {
      textStyle.color = '#fff';
    }
  } else if (bgImg && colorMode == 2) {
    const defString = `url(${bgImg}) ${bgColor}`
    if (imgFilter == 'default'){
      bgStyle.background = defString;
    } else if (imgFilter == 'dark'){
      bgStyle.background = blackFilter + defString;
      textStyle.color = '#fff';
    } else {
      // light
      bgStyle.background = whiteFilter + defString;
      textStyle.color = '#000';
    }
  } else if (colorMode == 1) {
    bgStyle.background = bgGradient;
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
            <div className='before'></div>
            <Tweet
              tweet={props.mainTweet.tweet}
              user={props.mainTweet.user}
              quoted={props.quoted}
              boxRounded={boxRounded}
              boxBorder={boxBorder}
              boxBackground={boxBackground}
              boxShadow={boxShadow}
              boxText={textStyle}
            />
          </div>
        </div>
      </div>

      <SideBar
        onSubmit={imgClick}
        onSwitchRounded={() => setBoxRounded(!boxRounded)}
        onSwitchBorder={() => setBoxBorder(!boxBorder)}
        onSwitchBoxBackground={() => setBoxBackground(!boxBackground)}
        onSwitchShadow={() => setBoxShadow(!boxShadow)}
        solid={colorMode != 1}
        boxBackground={boxBackground}
      >
        <BackgroundPicker
          onChange = {handleColorChange}
          color={bgColor}
          onClickAddImage={onClickAddImage}
          onClickTrash={onClickTrash}
          fileName={selectedFile ? selectedFile.name : null}
          colorMode={colorMode}
          setColorMode={setColorMode}
          setBoxBackground={setBoxBackground}
          onClickGradient={onClickGradient}
          handleGradientChange={handleGradientChange}
          gradient={gradient}
          imgFilter={imgFilter}
          setImgFilter={setImgFilter}
        />

        <PhotoUpload
          show={modalShow}
          onHide={() => setModalShow(false)}
          onFileChange={onFileChange}
          useImageURL={useImageURL}
          imgRef={imageUrlRef}
          unsplashPhotoClick={unsplashPhotoClick}
        />

      </SideBar>
    </>
  }

  return <div id='result'>{content}</div>;
}



export default Result;
