import React, { useState } from 'react';

import { CustomPicker, CirclePicker } from 'react-color';
import { HexColorPicker, HexColorInput } from "react-colorful";
import { IoColorPaletteSharp } from "react-icons/io5";

function SolidColor(props) {
  const [show, setShow] = useState(false);

  return (
    <>
      <CirclePicker
        width='100%'
        circleSpacing={6}
        colors={['#EB144C', '#FF7C00', '#FCD600', '#50D175', '#71C7FE', '#7871FE', '#FEA5DD']}
        onChange={ props.onChange }
      />

      <div id='custom-color'>
        <div id='top-button'>
          <div id='inputgroup'>
            <HexColorInput color={props.hex} onChange={props.onChange} />
            <i className="">#</i>
          </div>
          <button className='chevron' onClick={() => setShow(!show)}>
            <IoColorPaletteSharp />
          </button>
        </div>

        <div id='popover' className={show ? 'popoverShow' : ''}>
          <HexColorPicker color={props.hex} onChange={props.onChange} />

        </div>
      </div>
    </>
  )
}

export default CustomPicker(SolidColor);
