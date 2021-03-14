import React from "react";

import { TwitterPicker } from 'react-color';
import { scroller } from 'react-scroll';
import Tweet from '../components/tweet';

const serverErrorMsg = 'Server Error';

class Result extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      bg: '#E1E8ED',
      img: null,
    }

    this.handleColorChange = this.handleColorChange.bind(this);
    this.genCanvas = this.genCanvas.bind(this);
    this.imgClick = this.imgClick.bind(this);

  }

  genCanvas(){
    const html2canvas = require('html2canvas');

    // necessary for proper image creation with html2canvas
    window.scrollTo({ top: 0})

    // Hide scrollbar to fix bug with html2canvas which adds extra whitespace to image if scrollbar is present
    document.documentElement.style.overflow = 'hidden';

    return html2canvas(document.querySelector("#preview .sq-container"), {allowTaint: false, useCORS: true})
    .then((canvas) => {
      scroller.scrollTo('result-wrapper', {
        smooth: false,
      })

      // Un-hide scrollbar
      document.documentElement.style.overflow = '';

      const src = canvas.toDataURL();
      return src;
    })


  }

  async imgClick(){
    const img = await this.genCanvas();
    this.setState({
      img: img
    });
  }


  handleColorChange(color, event){
    this.setState({
      bg: color.hex
    });

  }

  componentDidMount() {

    scroller.scrollTo('result-wrapper', {
      smooth: true,
    })

  }

  render(){
    console.log('render');

    let bgStyle = {backgroundColor: this.state.bg}

    // console.log(this.props.tweet);
    if (this.props.tweet === serverErrorMsg){
      return <p>{serverErrorMsg}</p>
    }

    let content;

    if (this.state.img){
      content = <img className='tweet-img' src={this.state.img}/>
    } else {
      content = <>
        <div id='preview'>
          <h3>Preview</h3>
          <div className='sq-container-container'>
            <div className='sq-container' style={bgStyle}>
              <Tweet
                tweet={this.props.tweet}
                user={this.props.user}
              />
            </div>
          </div>

          <TwitterPicker
            triangle='hide'
            onChangeComplete={this.handleColorChange}
            colors={['#E1E8ED', '#EB144C', '#FF8B00', '#ffd000', '#00D036', '#1DA1F2', '#ff40cf', '#7900f2']}
            color={this.state.bg}/>

        </div>

        <button onClick={this.imgClick}>Create Image</button>
      </>
    }

    return (
      <>
        <div id='result'>
        {content}
        </div>
      </>
    );
  }
}



export default Result;
