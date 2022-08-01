// components/Form/Form.jsx
import { Component } from 'react';

export default class Postform extends Component {
  state = {
    content: ""
  };

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }
  handleSubmit = async () => {
    // build the body
    let body = {content: this.state.content}
    // we need an options object for our fetch call
    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    };
    await fetch('/api', options)
      .then(res => res.json())
      .then(data => {
        // call our getPosts fuction to get fresh data
        this.props.getPosts();
        // clear out this.state.content
        this.setState({content: ''})
      })
  }
  render() {
    return(
      <section className='body-container'>
        <div>
          <textarea
            name="content"
            onChange={this.handleChange}
            value={this.state.content}></textarea>
          <br/>
          <button onClick={this.handleSubmit}>Submit!</button>
        </div>
      </section>
    )
  }
}
