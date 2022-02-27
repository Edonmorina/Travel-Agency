import React from 'react';
import { Link ,useLocation } from 'react-router-dom';
import '../../../scss/main.scss';
import logo from '../assets/svgQuotes.svg';
import { BsInstagram, BsTwitter, BsLinkedin } from 'react-icons/bs';

function Footer() {
    let location = useLocation();

    if(location.pathname === "/auth/register" || location.pathname === "/auth/login" || location.pathname === "/forgot-password") {
        return null;
    }
    
  return <footer>

        <div className='footer-logo-links'>
            <img src={logo} className="footer-logo" alt="footer-logo" />
            <h3>Quote Me!</h3>
            <ul className='social-icons'>
                <li><BsInstagram color='white' fontSize={'clamp(1rem, 1rem + 1vw, 3rem)'}/></li>
                <li><BsTwitter color='white' fontSize={'clamp(1rem, 1rem + 1vw, 3rem)'}/></li>
                <li><BsLinkedin color='white' fontSize={'clamp(1rem, 1rem + 1vw, 3rem)'}/></li>
                <li><BsInstagram color='white' fontSize={'clamp(1rem, 1rem + 1vw, 3rem)'}/></li>
            </ul>
        </div>

        <div>
            <h5>Support</h5>
            <ul className='footer-bar'>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Downloads</a></li>
                <li><a href="#">Locate a Dealer</a></li>
                <li><a href="#">Product Registration</a></li>
                <li><a href="#">Spare Parts</a></li>
            </ul>
        </div>

        <div>
            <h5>Quote Me!</h5>
            <ul className='footer-bar'>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/hotels">Quotes</Link>
                </li>
                <li>
                    <Link to="/authors">Authors</Link>
                </li>
                <li>
                    <Link to="/login">Login / Register</Link>
                </li>
            </ul>
        </div>

        <div className='newsletter'>
            <h5>Stay up to date with the latest from Quote Me!</h5>
            <input type="email" placeholder='Enter your e-mail address'/>
            <button>Sign Up</button>
        </div>
      

          
  </footer>
}

export default Footer;
