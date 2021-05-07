import React, { useState, useRef } from 'react';


function PhotoUpload(props) {
  let content;
  if (props.fileName) {
    content = <span>{props.fileName}</span>
  } else {
    content = <>
      <span id='icon'>&#8682;</span>
      Upload photo
    </>
  }

  return (<>

    <label id='photo-upload'>
      <input type="file" onChange={props.onFileChange} accept="image/jpeg, image/png"/>
        {content}

    </label>
    <div id='image-url'>
      <span>or use an image URL</span>
      <form action={void(0)} onSubmit={props.useImageURL} >
        <input type="text" placeholder='https://' ref={props.imgRef}/>
        <button type='submit'>Apply</button>
      </form>
    </div>


    <span className='sub-section'>If the photo is transparent, the selected color will be the photo's background color too</span>
  </>
  )
}

export default PhotoUpload;
