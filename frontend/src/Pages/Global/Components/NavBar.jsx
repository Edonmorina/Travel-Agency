import React, { useState } from 'react';
import { Link , useLocation } from 'react-router-dom';
import '../../../scss/main.scss';
import logo from '../assets/logo.svg';
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
                <Link to="/hotels" className='nav-links'>Hotels</Link>
              </li>
              <li>
                <Link to="/flights" className='nav-links'>Flights</Link>
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

            <svg className={toggledState ? 'ham hamRotate ham1' : 'ham hamRotate ham1 active'} id="ham-svg" viewBox="0 0 100 100" width="80" 
            onClick={() => dispatch(toggle())}>
  <path
        class="line top"
        d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40" />
  <path
        class="line middle"
        d="m 30,50 h 40" />
  <path
        class="line bottom"
        d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40" />
</svg>
        </nav>
    )
}

export default NavBar;



