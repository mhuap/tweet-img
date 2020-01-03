import React from "react";
import axios from 'axios';
const errormsg = '400: Invalid URL';

// import { useRouter } from 'next/router'
// import SEO from "../components/seo"
import Result from '../components/result';
import '../scss/index.scss';
// import logosrc from '../images/Twitter_Logo_Blue.svg'


class IndexPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        loading: false,
        // url: '',
        blank: true,
        tweet: ''
    };

    this.urlInput = React.createRef();
    // this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  createTweet(url){
    console.log('axios');

    this.setState({
      loading: true
    })
    console.log('loading')

    axios.post('/api', {
      url: url
    })
    .then(response => {
      console.log('response')
      // console.log(response.data)

      this.setState({
        tweet: response.data,
        loading: false
      });

      console.log('not loading')

      // this.genCanvas()

    })
    .catch(error => {
      console.log(error)
      this.setState({
        tweet: errormsg,
        loading: false
      });

      console.log('not loading')
    })

  }

  handleSubmit(e){
    e.preventDefault();

    console.log('Submitted');
    this.setState({
        blank: false
    }, () => this.createTweet(this.urlInput.current.value));

  }


  render(){
    var res;
    if (this.state.blank){
      res = null;
    } else if (this.state.loading){
      res = <p>Loading...</p>;
    } else {
      res = <Result tweet={this.state.tweet}/>;
    }
    return (
      <div id='container'>
        <div id='form-wrapper'>
          <h1>tweet-img</h1>
          <form onSubmit={this.handleSubmit}>
            <label>Enter Tweet URL</label>
            <div id='form-input'>
              <input id='url-input'type='text' ref={this.urlInput} name='url' placeholder='twitter.com/status/tweeturl'/>
              <button>&#8594;</button>
            </div>
          </form>
        </div>

        {res}

      </div>
    );
  }
}

export default IndexPage
