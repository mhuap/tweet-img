import React, { useState } from 'react';

import { BiImageAdd, BiTrash, BiChevronDown, BiChevronUp } from "react-icons/bi";

import SolidColor from "./solidColor.js";
import GradientColor from "./gradientColor.js";
import TwoLabelSwitch from "./twoLabelSwitch.js";


function BackgroundPicker(props) {
  const { onClickTrash, onClickAddImage, colorMode, setColorMode, onClickGradient,
    handleGradientChange, gradient, setBoxBackground, setImgFilter, imgFilter, ...rest} = props;

  let imageButton;

  const checkEnter = (e, i) => {
    if (e.key == "Enter") {
      return setColorMode(i)
    }
  }

  if (props.fileName) {
    imageButton = <><div id='red-split-button'>
      <div>{props.fileName}</div>
      <button id='trash' onClick={onClickTrash}>
        <BiTrash/>
      </button>
    </div>
    <div id='dark-light-radio'>
      <label><input type='radio' name='dark-light' onClick={() => setImgFilter('default')} checked={imgFilter === 'default'}/> Default</label>
      <label><input type='radio' name='dark-light' onClick={() => {setImgFilter('dark'); setBoxBackground(false)}} checked={imgFilter === 'dark'}/> Dark</label>
      <label><input type='radio' name='dark-light' onClick={() => {setImgFilter('light'); setBoxBackground(false)}} checked={imgFilter === 'light'}/> Light</label>
    </div>
    </>;
  } else {
    imageButton = <>
      <button id='add-image' className='light-button' onClick={onClickAddImage}>
        Add background image
      </button>
    </>
  }

  let content;
  if (colorMode == 0) {
    content = <SolidColor {...rest}/>;
  } else if (colorMode == 1) {
    content = <GradientColor onClickGradient={onClickGradient} handleGradientChange={handleGradientChange} gradient={gradient}/>;
  } else if (colorMode == 2) {
    content = imageButton;
  }

  return (
    <>

    <div className='segmented'>
      <input type='radio' name='color-mode' id='solid' checked={colorMode == 0}/><label
        tabIndex='0'
        className='custom-control-label'
        htmlFor='solid'
        onClick={() => setColorMode(0)}
        onKeyDown={(e) => checkEnter(e, 0)}
        >Solid</label>
      <input type='radio' name='color-mode' id='gradient' checked={colorMode == 1}/><label
        tabIndex='0'
        className='custom-control-label'
        htmlFor='gradient'
        onClick={() => {setColorMode(1); setBoxBackground(true);}}
        onKeyDown={(e) => checkEnter(e, 1)}
        >Gradient</label>
      <input type='radio' name='color-mode' id='radio-image' checked={colorMode == 2}/><label
        tabIndex='0'
        className='custom-control-label'
        htmlFor='radio-image'
        onClick={() => {setColorMode(2); setBoxBackground(true);}}
        onKeyDown={(e) => checkEnter(e, 2)}
        >Image</label>
    </div>

    {content}

    </>
  )
}


export default BackgroundPicker;
