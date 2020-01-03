import React from "react";
import axios from 'axios';
const errormsg = '400: Invalid URL';
// import Tweet from '../components/tweet';

class Result extends React.Component {

  constructor(props){
    super(props);

  }

  genCanvas(){
    const html2canvas = require('html2canvas');
    html2canvas(document.querySelector("#tweet-container"), {allowTaint: true}).then(function(canvas) {
      canvas.className = 'tweet-container-container';

      let div = document.querySelector('#canvas div');
      div.parentNode.replaceChild(canvas, div);
    });
  }

  render(){
    console.log('render');
    if (this.props.tweet === errormsg){
      return <p>{errormsg}</p>
    }
    return (
      <>
        <div id='result'>

          <div>
            <h2>Preview</h2>
            <div className='tweet-container-container'>
              <div id='tweet-container'>
                <div id='tweet' dangerouslySetInnerHTML={{__html: this.props.tweet}}>

                </div>
              </div>
            </div>
          </div>

          <div id='canvas'>
            <h2>Image</h2>
            <div className='tweet-container-container'>
              <button onClick={this.genCanvas}>Create Image</button>
            </div>
          </div>

        </div>
      </>
    );
  }
}

export default Result;
