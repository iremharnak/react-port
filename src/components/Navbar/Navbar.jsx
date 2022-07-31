import './Navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <section className='nav-container'>
      <Link to='/home'>
        <h4>HOME</h4>
      </Link>
       
      <div className='nav-right-container'>
        <Link to='/about'><h4>ABOUT</h4></Link>
        <h4>CONTACT</h4>
      </div>
    </section>
  )
}
