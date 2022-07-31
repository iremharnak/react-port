import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import ContactForm from '../../components/ContactForm/ContactForm';

class Contact extends React.Component {

  render() {
    return(
      <>
          <Navbar />
          <ContactForm />

      </>
    )
  }
}

export default Contact;