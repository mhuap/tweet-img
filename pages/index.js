import React from "react";
import axios from 'axios';
// import { useRouter } from 'next/router'
// import SEO from "../components/seo"
import '../scss/index.scss';
// import logosrc from '../images/Twitter_Logo_Blue.svg'


class IndexPage extends React.Component {
  // const router = useRouter()
  // const { tweeturl } = router.query
  constructor(props) {
    super(props);
    this.state = {
        url: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    e.preventDefault();
    this.setState({
        url: e.target.value,
    });
  }

  handleSubmit(e){
    e.preventDefault();
    //making a post request with the fetch API
    axios.post('/api', {
      url: this.state.url
    })
    .then(response => {
      // console.log(response.data)
      const div = document.getElementById('tweet');
      div.innerHTML = response.data;

      let logo = document.createElement('img');
      logo.id = 'logo';
      logo.src = '/Twitter_Logo_Blue.png';
      document.getElementById('tweet').appendChild(logo);

      let ver = document.querySelector('.u-hiddenVisually');
      if (ver){
        let badge = document.createElement('img');
        badge.id = 'badge';
        badge.src = '/verified.png';
        ver.parentNode.replaceChild(badge, ver);
      }
      // this.genCanvas()
    })
    .catch(error => console.log(error))
  }

  genCanvas(){
    const html2canvas = require('html2canvas');
    html2canvas(document.querySelector("#tweet-container"), {allowTaint: true}).then(function(canvas) {
      // document.querySelector('#container').appendChild(canvas);
      let tweetContainer = document.getElementById('tweet-container-container');
      tweetContainer.parentNode.replaceChild(canvas, tweetContainer);
    });
  }

  render(){
    return (
      <div id='container'>
        <h1>tweet-img</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Enter Tweet URL</label>
          <div id='form-input'>
            <input id='url-input'type='text' onChange={this.handleChange} name='url' placeholder='twitter.com/status/tweeturl'/>
            <button>Generate Image</button>
          </div>
        </form>

        <div id='tweet-container-container'>
          <div id='tweet-container'>
            <div id='tweet'></div>
          </div>
        </div>

        <button onClick={this.genCanvas}>Save Image</button>

      </div>
    );
  }
}

// IndexPage.getInitialProps = async ({ req }) => {
//   const res = await axios.post('/');
//   const json = await res.json();
//   return { tweeturl: json.url };
// }

export default IndexPage
