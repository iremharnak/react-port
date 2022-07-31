import React from 'react';
import './ContactForm.css';

class ContactForm extends React.Component {
  state = {
    content: {name: '', email: '',message: '' },
    name: '',
    email: '',
    message: ''
  }

  // adding onChange event handler
  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }
  formSumbitted = (e) => {
    e.preventDefault();
    const {name, email, message} = this.state;
    const newObj = {name, email, message};
    
    // const newContent = [...this.state.content, newObj]
    // this.setState({
    //   newContent
    // })
    console.log(newObj)
    alert(newObj)
  }
  render() {
    return(
      <section className='body-container'>
      <h2>Get in touch!</h2>
      <p>Send me a message with your name and email. I will get back to you as soon as I can.</p>
      <form action="">
        <label><span>Name:</span>
        <input name="name" value={this.state.name} onChange={this.handleChange}/>
        </label>
        <label><span>Email:</span>
        <input name="email" value={this.state.email} onChange={this.handleChange}/>
        </label>
        <label><span>Message:</span>
        <textarea name="message" value={this.state.message} onChange={this.handleChange} cols="30" rows="10"></textarea>
        </label>
        <button onClick={this.formSumbitted}>Send</button>
      </form>
      </section>
    )
   
  }
}

export default ContactForm;

