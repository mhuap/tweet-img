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
    panelStyle = {opacity: 0}
    if (displayPanel) {
      panelStyle = {opacity: 1}
    }
  } else {
    panelStyle = {opacity: 1}
  }



  const popover = (
    <div id='colorpicker-group'
      style={panelStyle}
      >

      <div id='saturation-picker'>
        <Saturation
          { ...props }
          pointer={ ColorPointer }
        />
      </div>

      <div id='hue-picker'>
        <Hue
          {...props}
          onChange={ props.onChange }
          direction={ 'horizontal' }
          pointer={ ColorPointer } />
      </div>

    </div>
  );

  return (
    <div id='colorpicker'>

      <div id="inputgroup">
        <EditableInput
          label=""
          value={ props.hex.substring(1) }
          onChange={ props.onChange }
        />

        <button
          id="swatch"
          className="input-overlay"
          onClick={handleSwatchClick}
          onMouseEnter={handleSwatchHover}
          onMouseLeave={handleSwatchHover}
        >
          <div ref={target} style={colorStyle}></div>
        </button>

        <i className="">#</i>
      </div>

      {popover}

      <Overlay
        target={isBig ? target.current : null}
        show={show}
        placement='bottom'
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
