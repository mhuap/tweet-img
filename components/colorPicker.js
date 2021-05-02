import React, { useState, useRef } from 'react';

import { CustomPicker } from 'react-color';
import { EditableInput, Saturation, Hue } from 'react-color/lib/components/common';
import Overlay from 'react-bootstrap/Overlay';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { useMediaQuery } from 'react-responsive'
// import Popover from 'react-bootstrap/Popover';
// import { cpGroup } from './popoverCSS';

import ColorPointer from './colorPointer';


function ColorPicker(props) {
  const [displayPanel, setdisplayPanel] = useState(false);
  const [show, setShow] = useState(false);
  const isBig = useMediaQuery({ minWidth: 532 });
  const target = useRef(null);

  const handleSwatchHover = () => {
    setShow(!show);
  };

  const handleSwatchClick = () => {
    setdisplayPanel(!displayPanel);
  };

  const colorStyle = {
    backgroundColor: props.hex,
  };

  let panelStyle;
  if (isBig){
    panelStyle = {display: 'none'}
    if (displayPanel) {
      panelStyle = {display: 'block'}
    }
  } else {
    panelStyle = {display: 'block'}
  }

  const pointerIndex = displayPanel ? '0' : null;

  const popover = (
    <div id='colorpicker-group'
      style={panelStyle}
      >

      <div id='saturation-picker'>
        <Saturation
          { ...props }
          pointer={ ColorPointer }
          tabIndex={pointerIndex}
        />
      </div>

      <div id='hue-picker'>
        <Hue
          {...props}
          onChange={ props.onChange }
          direction={ 'horizontal' }
          pointer={ ColorPointer }
          tabIndex={pointerIndex} />
      </div>

    </div>
  );

  return (
    <div id='colorpicker'>

      <div id="inputgroup" className='soft-outline'>
        <button
          id="swatch"
          onClick={handleSwatchClick}
          onMouseEnter={handleSwatchHover}
          onMouseLeave={handleSwatchHover}
          type="button"
          ref={target} style={colorStyle}
        >
          <div ></div>
        </button>

        <div>

          <EditableInput
            label=""
            value={ props.hex.substring(1) }
            onChange={ props.onChange }
          />

          <i className="">#</i>
        </div>
      </div>

      {popover}

      <Overlay
        target={target.current}
        show={isBig ? show : null}
        placement='auto'
      >
        {(props) => (
          <Tooltip id={`tooltip-swatch`} {...props}>
            Pick color
          </Tooltip>
        )}
      </Overlay>
    </div>
  )
}


export default CustomPicker(ColorPicker);
