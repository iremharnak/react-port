import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Portfolio from '../../components/Portfolio/Portfolio';

class Home extends React.Component {

  render() {
    return(
      <>
          <Navbar />
          <Portfolio />

      </>
    )
  }
}

export default Home;