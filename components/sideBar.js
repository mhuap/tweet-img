import React from "react";

import Form from 'react-bootstrap/Form';


function SideBar(props) {

  return (
    <div id='customization'>
      <label className='section'>Customization</label>
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

      {props.children}
      <button type="submit" onClick={props.onSubmit}>Generate</button>
    </div>
  )
}

export default SideBar;
