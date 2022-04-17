import React from 'react';
import {Routes, Route, useLocation} from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';
import Home from '../../Home/Components/Home';
import Hotels from '../../Hotels/Components/Hotels';
import Flights from '../../Flights/Components/Flights';
import Login from '../../Auth/Components/LoginPage';
import Register from '../../Auth/Components/RegisterPage.jsx';
import ScrollToTop from '../../Global/Components/scrollToTop';
import Dashboard from '../../Dashboard/Dashboard';
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
                        <Route path="/hotels" element={<Hotels/>}/>
                        <Route path="/flights" element={<Flights/>}/>
                        <Route path="/auth/login" element={<Login/>}/>
                        <Route path="/auth/register" element={<Register/>}/>
                        <Route path="/admin/dashboard" element={<Dashboard/>}/>
                    </Routes>
                </AnimatePresence>
            <ScrollToTop/>
            <BurgerMenu/>
            <Footer/>
        </>
    )
}

export default RouteSwitch;