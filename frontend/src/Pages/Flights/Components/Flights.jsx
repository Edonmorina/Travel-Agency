import React, { useRef, useState, useEffect } from 'react';
import '../../../scss/main.scss';
import { AiOutlineSearch } from 'react-icons/ai';
import FlightList from './FlightList';
import axios from 'axios';
import { IoIosAirplane } from 'react-icons/io';

function Flights() {

    const depSearchInput = useRef("");
    const arriSearchInput = useRef("");
    const [flights, setFlights] = useState([]);

    const handleSearchKeyDown = (e) => {
        if(e.keyCode === 13) {
            e.preventDefault();
            getFlightData();
        }
    }

    useEffect(() => {
        depSearchInput.current.addEventListener("keypress", handleSearchKeyDown);
        arriSearchInput.current.addEventListener("keypress", handleSearchKeyDown);

        getFlightData();
    }, [])
    

    const getFlightData = async () => {
        const formData = new FormData();
        formData.append('depSearchTerm', depSearchInput.current.value);
        formData.append('arriSearchTerm', arriSearchInput.current.value);
        const res = await axios.post('http://localhost:8066/travel_agency_backend/includes/searchFlight.inc.php', formData);
        setFlights(res.data.flights);
    }


    return(
        <div className='flights' onLoad={window.scroll(0,0)}>
            <header className='app__flex'>
                <h1>Looking for a flight?</h1>
                <div className="header__flight_input app__flex">
                    <input type="text" ref={depSearchInput} className="dep-input" placeholder="Where you are..."/> 
                    <IoIosAirplane className="divider"/>
                    <input type="text" ref={arriSearchInput} className="arriv-input" placeholder="Where you are going..."/>
                    <button onClick={() => {
                            getFlightData();
                        }}><AiOutlineSearch/></button>
                </div>
            </header>
            <FlightList flights={flights}/>

            
        </div>
    )
}

export default Flights;