import React, { useState, useRef, useEffect }from "react";

import { scroller } from 'react-scroll';
import Overlay from 'react-bootstrap/Overlay';

import Tweet from './tweet';
import ColorPicker from './colorPicker';
import PhotoUpload from './photoUpload';

const serverErrorMsg = 'Server Error';

function Result(props){
    const [bg, setBg] = useState('#E1E8ED');
    const [resultImg, setResultImg] = useState(null);
    const [bgImg, setBgImg] = useState(null);
    const [colorMode, setColorMode] = useState(true);
    const [selectedFile, setSelectedFile] = useState(null);

    const ref = useRef();

    useEffect(() => {
      scroller.scrollTo('result-wrapper', {
        smooth: true,
      })
    });

    const handleColorChange = (color, event) => setBg(color.hex);

    const onFileChange = () => {
      const file = event.target.files[0];
      setSelectedFile(file);

      var reader = new FileReader();
      reader.onload = function(event) {
        setBgImg(event.target.result)
      };;

      reader.readAsDataURL(file);
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
          logging: false
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

    // console.log(props.tweet);
    if (props.tweet === serverErrorMsg){
      return <p>{serverErrorMsg}</p>
    }

    let bgSection;
    let bgStyle = {backgroundColor: bg};

    if (colorMode){
      bgSection = <ColorPicker
        onChange = {handleColorChange}
        color={bg}
      />
    } else {
      if (bgImg) {
        bgStyle = {backgroundImage: `url(${bgImg})`};
      }
      bgSection = <PhotoUpload
        onFileChange={onFileChange}
        fileName={selectedFile ? selectedFile.name : null}
      />
    }


    let content;

    if (resultImg){
      content =<>
      <small>Click image to download</small>
      <a href={resultImg} download='tweet'>
        <img
          id='tweet-img'
          src={resultImg}
        />
      </a>

        <small id='backup-link'>or <a href={resultImg} download="tweet">download here</a></small>
      </>
    } else {
      content = <>
        <div id='preview'>
          <label className='section'>Preview</label>
          <div className='sq-container-container'>
            <div className='sq-container' style={bgStyle}>
              <Tweet
                tweet={props.tweet}
                user={props.user}
              />
            </div>
          </div>

          <label className='section'>Background Color</label>
          <form id="background-color" action="#" onSubmit={imgClick}>
            <div className="row-color">
              <div>
                <label className={'form-check2' + (colorMode ? ' radio-active' : '')}
                  onClick={(e) => setColorMode(true)}
                >
                  <input id='color' type='radio' name='bg' defaultChecked/>
                  Single color
                </label>

                <label className={'form-check2' + (colorMode ? '' : ' radio-active')}
                  onClick={(e) => setColorMode(false)}
                >
                  <input id='photo' type='radio' name='bg'/>
                  Photo
                </label>

              </div>

              {bgSection}
            </div>
            <button type="submit">Create Image</button>
          </form>

        </div>

      </>
    }

    return <div id='result'>{content}</div>;
}



export default Result;
