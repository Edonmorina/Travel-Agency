import React from "react";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import '../../../scss/main.scss';
import bg from '../assets/background.svg';
import { AiOutlineSearch } from 'react-icons/ai';

function HomePageFirstSection() {

    return(
        <section className="home-fs" onLoad={window.scroll(0,0)}>
            <header className="app__flex" style={{backgroundImage: `url(${bg})`}}>
                <h1>Travel the world with us!</h1>
                <h4>Where would you like to go ?</h4>
                <div className="header__input app__flex"><input type="text" placeholder="Search for your destination..."/> <button><AiOutlineSearch/></button></div>
            </header>
                
        </section>
    )
}

export default HomePageFirstSection;