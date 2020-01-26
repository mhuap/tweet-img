import React from "react";

import axios from 'axios';
import { TwitterPicker } from 'react-color';
import { scroller } from 'react-scroll';

const errormsg = 'Error: 404 Invalid URL';

class Result extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      bg: '#E1E8ED',
      isDiff: false, // is the image different from the preview
      first: true // is this the first image to be generated
    }


    this.handleColorChange = this.handleColorChange.bind(this);
    this.genCanvas = this.genCanvas.bind(this);
    this.imgClick = this.imgClick.bind(this);
    this.refresh = this.refresh.bind(this);

  }

  genCanvas(){
    const html2canvas = require('html2canvas');
    window.scrollTo(0,0)
    html2canvas(document.querySelector("#preview .tweet-container"), {allowTaint: true, useCORS: true})
    .then((canvas) => {

      canvas.className = 'tweet-container-container';
      let img = document.createElement('img');
      img.src = canvas.toDataURL();

      if (this.state.first){
        let div = document.querySelector('#canvas .tweet-container-container');
        div.parentNode.replaceChild(img, div);
      } else {
        let old = document.querySelector('#canvas > img');

        old.parentNode.replaceChild(img, old);
      }

    })
    .then(() => {
      if (this.state.first){
        this.setState({
          first: false
        });
      }
    });

    scroller.scrollTo('canvas')

  }

  imgClick(){
    this.genCanvas()
  }

  refresh(){
    this.setState({
      isDiff: false
    });
    this.genCanvas();
  }

  handleColorChange(color, event){
    if (this.state.first){
      this.setState({
        bg: color.hex
      });
    } else {
      this.setState({
        bg: color.hex,
        isDiff: true
      });
    }

    let v = document.querySelector('.twitter-picker input');
    v.value = String(color.hex).toUpperCase().replace('#','');

  }

  componentDidMount() {
    if (this.props.tweet !== errormsg){
      let v = document.querySelector('.twitter-picker input');
      v.value = String(this.state.bg).toUpperCase().replace('#','');
    }

    scroller.scrollTo('result-wrapper', {
      smooth: true,
    })
  }

  render(){
    console.log('render');

    let bgStyle = {backgroundColor: this.state.bg}

    // console.log(this.props.tweet);
    if (this.props.tweet === errormsg){
      return <p>{errormsg}</p>
    }
    return (
      <>
        <div id='result'>

          <div id='preview'>
            <h3>Preview</h3>
            <div className='tweet-container-container'>
              <div className='tweet-container' style={bgStyle}>
                <div id='tweet' dangerouslySetInnerHTML={{__html: this.props.tweet}}>

                </div>
              </div>
            </div>

            <TwitterPicker
              triangle='hide'
              onChangeComplete={this.handleColorChange}
              colors={['#E1E8ED', '#EB144C', '#FF8B00', '#ffd000', '#00D036', '#1DA1F2', '#ff40cf', '#7900f2']}/>

          </div>

          <div id='canvas'>
            <div id='canvas-bar'>
              <h3>Image</h3>
              <button id='refresh' onClick={this.refresh} disabled={!this.state.isDiff || this.state.first}>
                <span className='icon'>&#8635;</span> Refresh
              </button>
            </div>
            <div className='tweet-container-container'>
              <div className='tweet-container'>
                <button onClick={this.imgClick}>Create Image</button>
              </div>
            </div>
          </div>

        </div>
      </>
    );
  }
}



export default Result;
