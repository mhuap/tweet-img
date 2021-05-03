import React, { useState, useRef } from 'react';

import { CustomPicker } from 'react-color';
import { EditableInput, Saturation, Hue } from 'react-color/lib/components/common';
// import { useMediaQuery } from 'react-responsive'
// import Popover from 'react-bootstrap/Popover';
// import { cpGroup } from './popoverCSS';

import ColorPointer from './colorPointer';


function ColorPicker(props) {

  const colorStyle = {
    backgroundColor: props.hex,
  };

  const popover = (
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
          direction={ 'horizontal' }
          pointer={ ColorPointer }
          tabIndex='0' />
      </div>

    </div>
  );

  return (
    <div id='colorpicker'>

      <div id="inputgroup" className='soft-outline'>
        <EditableInput
          label=""
          value={ props.hex.substring(1) }
          onChange={ props.onChange }
        />

        <i className="">#</i>

        <div id="swatch" style={colorStyle}>
        </div>
      </div>

      {popover}

    </div>
  )
}


export default CustomPicker(ColorPicker);
