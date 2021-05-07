import React from "react";

import Form from 'react-bootstrap/Form';

function SideBar(props) {

  return (
    <div id='customization'>
      <label className='section'>Customization</label>
      <div id="background-color">
        <div id="switches">
          <span className='sub-section'>Tweet box</span>
          <Form.Check
            type="switch"
            label="Rounded corners"
            id='corner-switch'
            onClick={props.onSwitchRounded}
            defaultChecked
          />

          <Form.Check
            type="switch"
            label="Border"
            id='border-switch'
            onClick={props.onSwitchBorder}
          />
        </div>

        <span className='sub-section'>Background</span>
        <div id='segmented'>
          <label id='color'
            className={'form-check2' + (props.colorMode ? ' radio-active' : '')}
            onClick={props.onClickColor}
          >
            <input type='radio' name='bg' defaultChecked/>
            Color
          </label>

          <label id='photo'
            className={'form-check2' + (props.colorMode ? '' : ' radio-active')}
            onClick={props.onClickPhoto}
          >
            <input type='radio' name='bg'/>
            Photo
          </label>
        </div>
        {props.children}
        <button type="submit" onClick={props.onSubmit}>Create Image</button>
      </div>
    </div>
  )
}

export default SideBar;
