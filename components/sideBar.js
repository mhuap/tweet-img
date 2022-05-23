import React from "react";

import Form from 'react-bootstrap/Form';
import Spinner from 'react-bootstrap/Spinner';


function SideBar(props) {

  return (
    <div id='customization'>
      <label className='section'>Customization</label>
      <div id="switches">
        <span className='sub-section'>Tweet card</span>

        <Form.Switch
          label="Rounded corners"
          id='corner-switch'
          onChange={props.onSwitchRounded}
          defaultChecked
        />

        <Form.Switch
          label="Border"
          id='border-switch'
          onChange={props.onSwitchBorder}
        />

        <Form.Switch
          label="White background"
          id='background-switch'
          onChange={props.onSwitchBoxBackground}
          checked={props.solid ? props.boxBackground : true}
          disabled={!props.solid}
        />

        <Form.Switch
          label="Shadow"
          id='shadow-switch'
          onChange={props.onSwitchShadow}
          defaultChecked
        />

        <Form.Switch
          label="Image crop"
          id='crop-switch'
          onChange={props.onSwitchImageCrop}
          disabled={!props.imageCropDisabled}
        />

      </div>

      <span className='sub-section'>Background</span>

      {props.children}

      <button onClick={props.onGenerate}>
        Generate
        {props.genLoading && <Spinner className="gen-spinner" animation="border" role="status" variant="light" size="sm">
                <span className="visually-hidden">Loading...</span>
              </Spinner>}
      </button>

    </div>
  )
}

export default SideBar;
