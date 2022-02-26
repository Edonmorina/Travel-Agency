import React from 'react';
import {Routes, Route, useLocation} from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';
import Home from '../../Home/Components/Home';
import Quotes from '../../Quotes/Components/Quotes';
import Authors from '../../Authors/Components/Authors';
import Login from '../../Auth/Components/LoginPage';
import Register from '../../Auth/Components/RegisterPage.jsx';
import ScrollToTop from '../../Global/Components/scrollToTop';
import BurgerMenu from './BurgerMenu';
import { AnimatePresence} from 'framer-motion';

function RouteSwitch() {
    const location = useLocation();

    return(
        <>
            <NavBar/>
                <AnimatePresence exitBeforeEnter>    
                    <Routes location={location} key={location.key}>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/quotes" element={<Quotes/>}/>
                        <Route path="/authors" element={<Authors/>}/>
                        <Route path="/auth/login" element={<Login/>}/>
                        <Route path="/auth/register" element={<Register/>}/>
                    </Routes>
                </AnimatePresence>
            <ScrollToTop/>
            <BurgerMenu/>
            <Footer/>
        </>
    )
}

export default RouteSwitch;