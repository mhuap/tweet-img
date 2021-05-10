import React, { useState, useRef } from 'react';

import { CustomPicker, TwitterPicker } from 'react-color';
import { EditableInput, Saturation, Hue } from 'react-color/lib/components/common';
// import { useMediaQuery } from 'react-responsive'
// import Popover from 'react-bootstrap/Popover';
// import { cpGroup } from './popoverCSS';

import ColorPointer from './colorPointer';


function ColorPicker(props) {

  return (
    <div id='colorpicker'>

      <div id='colorpicker-group'>

        <div id='saturation-picker'>
          <Saturation
            { ...props }
            pointer={ ColorPointer }
            tabIndex='0'
          />
        </div>

        <div id='hue-picker'>
          <Hue
            {...props}
            onChange={ props.onChange }
            direction={ 'vertical' }
            pointer={ ColorPointer }
            tabIndex='0' />
        </div>

      </div>

      <div id='swatch-group'>

        <div id="inputgroup">

          <EditableInput
            id="something"
            label=""
            value={ props.hex.substring(1) }
            onChange={ props.onChange }
          />

          <i className="">#</i>

        </div>

        <TwitterPicker
          width='162px'
          colors={['#FCB900', '#56D150', '#8ED1FC', '#EB144C', '#F7B6DB', '#610DC1']}
          triangle='hide'
          onChange={props.onChange}/>

      </div>


    </div>
  )
}


export default CustomPicker(ColorPicker);
