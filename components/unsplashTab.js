import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import UnsplashPhoto from './unsplashPhoto.js';
import Masonry from 'react-masonry-css';

function UnsplashTab(props) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const queryInput = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault()

    setLoading(true);
    axios.get('/api/unsplash', {
      params: {
        query: queryInput.current.value
      }
    })
    .then(response => {

      setData(response.data.response.results)
      setLoading(false);

    })
    .catch(error => console.log(error))

  }

  let content;
  if (data == null && !loading){
    content = null
  } else if (data == null && loading) {
    content = <p>Loading...</p>
  } else {
    content = <div id="unsplash-results">
    <Masonry
      breakpointCols="2"
      className="masonry-grid"
      columnClassName="masonry-grid_column"
    >
      {data.map(photo => (
        <UnsplashPhoto
          id={photo.id}
          user={photo.user}
          urls={photo.urls}
          download_location={photo.links.download_location}
          handlePhotoClick={props.handlePhotoClick}/>
      ))}
    </Masonry>

    </div>
  }

  return (
    <div id="unsplash-tab">
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Search Unsplash photos by topics or colors"
          type="text"
          ref={queryInput}
          />
      </form>
      {content}
    </div>

    )
}

export default UnsplashTab;
