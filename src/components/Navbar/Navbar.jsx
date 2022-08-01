import './Navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <section className='nav-container'>
      <Link to='/home'>
      <div className='logo-container'>
          <img src="./irem-logo-black-2020.svg" alt="" />
        </div>
      </Link>
       
      <div className='nav-right-container'>
        <Link to='/about'><h4>ABOUT</h4></Link>
        <Link to='/contact'><h4>CONTACT</h4></Link>
        <Link to='/blog'><h4>BLOG</h4></Link>
      </div>
    </section>
  )
}
