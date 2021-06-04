import React, { useState, useRef } from 'react';

import { CustomPicker, TwitterPicker, CirclePicker } from 'react-color';
import { EditableInput, Saturation, Hue } from 'react-color/lib/components/common';
import { BiImageAdd, BiTrash } from "react-icons/bi";
// import { useMediaQuery } from 'react-responsive'
// import Popover from 'react-bootstrap/Popover';


import ColorPointer from './colorPointer';


function BackgroundPicker(props) {
  const [show, setShow] = useState(false);

  const { onClickTrash, onClickAddImage, ...rest} = props;

  const handleShow = () => {
    setShow(!show);
  }

  let pickerStyle = {display: 'none'};
  if (show) {
    pickerStyle.display = 'block';
  }

  let imageButton;

  if (props.fileName) {
    imageButton = <div id='red-split-button'>
      <div>{props.fileName}</div>
      <button id='trash' onClick={onClickTrash}>
        <BiTrash/>
      </button>
    </div>;
  } else {
    imageButton = <button className='light-button' onClick={onClickAddImage}>
      Add background image
    </button>
  }

  return (
    <>

    <div>
      <CirclePicker
        width='100%'
        circleSpacing={6}
        colors={['#EB144C', '#FF7C00', '#FCD600', '#50D175', '#71C7FE', '#7871FE', '#FEA5DD']}
        onChange={ {...rest}.onChange }
      />

      <button id='custom-color' className='light-button' onClick={handleShow}>
        Custom color
      </button>

      <div id='popover' style={pickerStyle}>

        <div id='colorpicker-group'>

          <div id='saturation-picker'>
            <Saturation
              { ...rest }
              pointer={ ColorPointer }
              tabIndex='0'
            />
          </div>

          <div id='hue-picker'>
            <Hue
              {...rest}
              direction={ 'vertical' }
              pointer={ ColorPointer }
              tabIndex='0' />
          </div>

        </div>

        <div id="inputgroup">

          <EditableInput
            id="something"
            label=""
            value={ {...rest}.hex.substring(1) }
          />

          <i className="">#</i>

        </div>

      </div>

      {imageButton}

    </div>


    </>
  )
}


export default CustomPicker(BackgroundPicker);
