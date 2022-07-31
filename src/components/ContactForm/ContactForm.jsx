import React from 'react';
import './ContactForm.css';

class ContactForm extends React.Component {
  state = {
    
    name: '',
    email: '',
    message: ''
  }

  // adding onChange event handler
  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }
  formSubmitted = async (e) => {
    e.preventDefault();
    const {name, email, message} = this.state;
    const newObj = {name, email, message};
    console.log(newObj)
    alert(newObj)
    try {
      await fetch("/api/form", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({userName: this.state.name, userEmail: this.state.email}) // <-- send this object to server
        }) 
        .then(response => response.json()) // <-- decode server response
        .then(serverData => {console.log("Success:", serverData)}) // <-- log serverData if success
        .catch(error => {console.error("Error:", error)}) // <-- log if error 
    } catch (err){
      console.error("Error, err")
    }
   
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
        <button onClick={this.formSubmitted}>Send</button>
      </form>
      </section>
    )
   
  }
}

export default ContactForm;

