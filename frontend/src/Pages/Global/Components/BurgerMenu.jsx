import React, { useState } from 'react';
import '../../../scss/main.scss';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch} from 'react-redux';
import { toggle } from '../../../features/toggleState';
import bgImg from '../assets/logo.svg';



function BurgerMenu() {
    const toggledState = useSelector((state) => state.toggle.value);
    const dispatch = useDispatch();

    return <div className={toggledState ? 'burger-menu burger-open' : 'burger-menu'} style={{ backgroundImage: `url(${bgImg})`}}>
        <ul>
            <li>
                <Link to="/" onClick={() => { dispatch(toggle());} }>Home</Link>
            </li>
            <li>
                <Link to="/hotels" onClick={() => { dispatch(toggle());} }>Hotels</Link>
            </li>
            <li>
                <Link to="/flights" onClick={() => { dispatch(toggle());} }>Flights</Link>
            </li>
            <li>
                <Link to="/auth/login" onClick={() => { dispatch(toggle());} }>Login / Register</Link>
            </li>
        </ul>
    </div>;
}

export default BurgerMenu;
