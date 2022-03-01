import React, { useState } from "react";
import DatePicker from 'react-datepicker';
// import "../../../../node_modules/react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import { AiOutlineSearch } from 'react-icons/ai';
import { IoIosAirplane } from 'react-icons/io';

import '../../../scss/main.scss';
import bg from '../assets/background.svg';

function HomePageFirstSection() {
    const btnStyles = [ {color: '#fff', backgroundColor: '#43AFE4'}, {color: '#000', backgroundColor: '#fff'}]
    const dateStyle = [ {display: 'none'}, {display: 'inline'}];

    const [btnChecked, setBtnChecked] = useState(false);
    const [startDateArrival, setStartDateArrival] = useState(new Date());
    const [startDateDepart, setStartDateDepart] = useState(new Date());

    return(
        <section className="home-fs" onLoad={window.scroll(0,0)}>
            <header className="app__flex" style={!btnChecked ? {backgroundImage: `url(${bg})`, paddingTop: '2rem'} : {backgroundImage: `url(${bg})`, paddingTop: '2.5rem'}}>
                <h1>Travel the world with us!</h1>
                <h4>Where would you like to go ?</h4>
                
                {
                btnChecked === false ? 

                <div className="header__hotel_input app__flex">
                    <input type="text" placeholder="Search for your destination..."/> 
                    <button><AiOutlineSearch/></button>
                </div>
                
                : <div className="header__flight_input app__flex">
                    <input type="text" className="dep-input" placeholder="Where you are..."/> 
                    <IoIosAirplane className="divider"/>
                    <input type="text" className="arriv-input" placeholder="Where you are going..."/>
                    <button><AiOutlineSearch/></button>
                </div>
                }
                <div className="header__choose" style={!btnChecked ? {width: '35%'} : {width: '45%'}}>
                    <div style={!btnChecked ? dateStyle[0] : dateStyle[1]} >
                        <DatePicker className="date" selected={startDateArrival} onChange={(date) => setStartDateArrival(date)} />
                        <DatePicker selected={startDateDepart} onChange={(date) => setStartDateDepart(date)} />
                    </div>

                    <button onClick={() => setBtnChecked(false)} style={!btnChecked ? btnStyles[0] : btnStyles[1]}>Hotels</button>
                    <button onClick={() => setBtnChecked(true)} style={btnChecked ? btnStyles[0] : btnStyles[1]}>Flights</button>
                </div>
            </header>
                
        </section>
    )
}

export default HomePageFirstSection;