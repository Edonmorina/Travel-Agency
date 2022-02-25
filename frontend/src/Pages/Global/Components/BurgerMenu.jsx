import React, { useState } from 'react';
import '../../../scss/main.scss';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch} from 'react-redux';
import { toggle } from '../../../features/toggleState';



function BurgerMenu() {
    const toggledState = useSelector((state) => state.toggle.value);
    const dispatch = useDispatch();

    return <div className={toggledState ? 'burger-menu burger-open' : 'burger-menu'}>
        <ul>
            <li>
                <Link to="/" onClick={() => { dispatch(toggle());} }>Home</Link>
            </li>
            <li>
                <Link to="/quotes" onClick={() => { dispatch(toggle());} }>Quotes</Link>
            </li>
            <li>
                <Link to="/authors" onClick={() => { dispatch(toggle());} }>Authors</Link>
            </li>
            <li>
                <Link to="/auth/login" onClick={() => { dispatch(toggle());} }>Login / Register</Link>
            </li>
        </ul>
    </div>;
}

export default BurgerMenu;
