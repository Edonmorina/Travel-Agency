import React, { useState } from 'react';
import { Link , useLocation } from 'react-router-dom';
import '../../../scss/main.scss';
import logo from '../assets/svgQuotes.svg';
import { useDispatch} from 'react-redux';
import { toggle } from '../../../features/toggleState';
import { useSelector } from 'react-redux';

function NavBar() {
  const location = useLocation();
  const dispatch = useDispatch();
  const toggledState = useSelector((state) => state.toggle.value);

  const [nav, setNav] = useState("nav")

    const listenScrollEvent = (e) => {
      if (window.scrollY < 1) {
        return setNav("nav")
      } else {
        return setNav("nav navMove")
      } 
    }
    
    React.useEffect(() => {
      window.addEventListener('scroll', listenScrollEvent);
    
      return () =>
        window.removeEventListener('scroll', listenScrollEvent);
    }, []);

    return(
        <nav className={nav}>
            <img src={logo} alt="logo" />
            
            <ul>
              <li>
                <Link to="/" className='nav-links'>Home</Link>
              </li>
              <li>
                <Link to="/quotes" className='nav-links'>Quotes</Link>
              </li>
              <li>
                <Link to="/authors" className='nav-links'>Authors</Link>
              </li>
              {
              location.pathname !== '/auth/login'
              ? 
              <li id='login_register_btn'>
                  <Link to="/auth/login" className='login_register_btn_text'>Login / Register</Link>
                </li>
              :
                <li id='login_register_btn'>
                  <a className='login_register_btn_text'>Login / Register</a>
                </li> 
                }
            </ul>

            <div className={toggledState ? 'icon nav-icon-1' : 'icon nav-icon-1 open'} onClick={() => {
              dispatch(toggle());
              console.log(toggledState);
            }}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
        </nav>
    )
}

export default NavBar;

