import React, { useState, useRef } from 'react';

const photoMessage = 'Choose photo';

function PhotoUpload(props) {

  return (<>
    <label id='photo-upload'>
      <input type="file" onChange={props.onFileChange} accept="image/jpeg, image/png"/>
      {(props.fileName ?
        <span>{props.fileName}</span> :
        <><span id='icon'>&#8682;</span> <span>{photoMessage}</span></>)}
      <div></div>
    </label>
    <span className='sub-section'>if the photo is transparent, the selected color will be the photo's background color too</span>
  </>
  )
}

export default PhotoUpload;
