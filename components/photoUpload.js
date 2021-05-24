import React, { useState, useRef } from 'react';

import Modal from 'react-bootstrap/Modal';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

function PhotoUpload(props) {

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      dialogClassName="modal-20w"
      centered
    >
      <Modal.Header closeButton>
        Select background image
      </Modal.Header>
      <Modal.Body>
        <Tabs fill defaultActiveKey="upload">
          <Tab eventKey="upload" title="Upload">
            <label id='photo-upload'>
              <input type="file" onChange={props.onFileChange} accept="image/jpeg, image/png"/>
                Browse
            </label>
          </Tab>
          <Tab eventKey="url" title="URL">
            <div id='image-url'>
              <form action={void(0)} onSubmit={props.useImageURL} >
                <input type="text" placeholder='https://' ref={props.imgRef}/>
                <button>Add</button>
              </form>
            </div>
          </Tab>
          <Tab eventKey="unsplash" title="Search" disabled>
            Coming soon!
          </Tab>
        </Tabs>
      </Modal.Body>
    </Modal>
  );
}

export default PhotoUpload;
