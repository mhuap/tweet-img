import React from "react";

import Form from 'react-bootstrap/Form';


function SideBar(props) {

  return (
    <div id='customization'>
      <label className='section'>Customization</label>
      <div id="switches">
        <span className='sub-section'>Tweet card</span>

        <Form.Switch
          label="Rounded corners"
          id='corner-switch'
          onClick={props.onSwitchRounded}
          defaultChecked
        />

        <Form.Switch
          label="Border"
          id='border-switch'
          onClick={props.onSwitchBorder}
        />

        <Form.Switch
          label="White background"
          id='background-switch'
          onClick={props.onSwitchBoxBackground}
          defaultChecked={props.solid ? props.boxBackground : true}
          disabled={!props.solid}
        />

        <Form.Switch
          label="Shadow"
          id='shadow-switch'
          onClick={props.onSwitchShadow}
          defaultChecked
        />
      </div>

      <span className='sub-section'>Background</span>

      {props.children}

      <div className='customization-buttons'>
        <button onClick={props.onCopy}>Copy</button>
        <button onClick={props.onDownload}>Download</button>
      </div>

    </div>
  )
}

export default SideBar;
