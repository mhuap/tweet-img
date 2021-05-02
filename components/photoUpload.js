import React, { useState, useRef } from 'react';

const photoMessage = 'Choose photo';

function PhotoUpload(props) {

  return (
    <label id='photo-upload'>
      <input type="file" onChange={props.onFileChange} accept="image/jpeg, image/png"/>
      {(props.fileName ?
        <span>{props.fileName}</span> :
        <>&#8682; <span>{photoMessage}</span></>)}
      <div></div>
    </label>
  )
}

export default PhotoUpload;
