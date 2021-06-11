import React, { useState, useRef } from 'react';

import { CustomPicker, TwitterPicker, CirclePicker } from 'react-color';
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { EditableInput, Saturation, Hue } from 'react-color/lib/components/common';

import ColorPointer from './colorPointer';

function SolidColor(props) {
  const [show, setShow] = useState(false);

  const roundedStyle = show ? {borderRadius: '8px 8px 0 0'} : null;

  return (
    <>
      <CirclePicker
        width='100%'
        circleSpacing={6}
        colors={['#EB144C', '#FF7C00', '#FCD600', '#50D175', '#71C7FE', '#7871FE', '#FEA5DD']}
        onChange={ props.onChange }
      />

      <button id='custom-color' style={roundedStyle}className='light-button' onClick={() => setShow(!show)}>
        Custom color
        {show ? <BiChevronUp /> : <BiChevronDown />}
      </button>

      <div id='popover' className={show ? 'popoverShow' : ''}>

        <div id='colorpicker-group'>

          <div id='saturation-picker'>
            <Saturation
              { ...props}
              pointer={ ColorPointer }
              tabIndex='0'
            />
          </div>

          <div id='hue-picker'>
            <Hue
              {...props}
              direction={ 'vertical' }
              pointer={ ColorPointer }
              tabIndex='0' />
          </div>

        </div>

        <div id="inputgroup">

          <EditableInput
            id="something"
            label=""
            value={ props.hex.substring(1) }
          />

          <i className="">#</i>

        </div>

      </div>
    </>
  )
}


export default CustomPicker(SolidColor);
