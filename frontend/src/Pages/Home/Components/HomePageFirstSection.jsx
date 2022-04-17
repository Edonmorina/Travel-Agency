import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from 'react-router-dom';
import '../../../scss/main.scss';
import bg from '../assets/bg.svg';

function HomePageFirstSection() {

    const [btnChecked, setBtnChecked] = useState(false);
    const [hotelSearch, setHotelSearch] = useState("");
    const handleHotelSearch = () => {
        if(hotelSearch === "") {
            return;
        }

    }

    return(
        <section className="home-fs" onLoad={window.scroll(0,0)}>
            <header className="app__flex" style={!btnChecked ? {backgroundImage: `url(${bg})`, paddingTop: '2rem'} : {backgroundImage: `url(${bg})`, paddingTop: '2.5rem'}}>
                <div>
                    <h1>Travel Sense</h1>
                <h4>Your traveling companion</h4>
                <div>
                <Link to='/hotels'><button>Search for a hotel</button></Link>
                    <Link to='/flights'><button>Search for a flight</button></Link>
                </div>
                </div>
            </header>
                
        </section>
    )
}

export default HomePageFirstSection;