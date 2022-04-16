import React, { useRef, useState, useEffect } from 'react';
import '../../../scss/main.scss';
import { AiOutlineSearch } from 'react-icons/ai';
import FlightList from './FlightList';
import axios from 'axios';

function Flights() {

    const searchInput = useRef("");
    const [flights, setFlights] = useState([]);

    const handleSearchKeyDown = (e) => {
        if(e.keyCode === 13) {
            e.preventDefault();
            getFlightData();
        }
    }

    useEffect(() => {

        searchInput.current.addEventListener("keypress", handleSearchKeyDown)

        getFlightData();


    }, [])
    

    const getFlightData = async () => {
        const formData = new FormData();
        formData.append('flightSearchTerm', searchInput.current.value);
        const res = await axios.post('http://localhost:8066/travel_agency_backend/includes/searchFlight.inc.php', formData);
        setFlights(res.data.flights);
    }


    return(
        <div className='flights' onLoad={window.scroll(0,0)}>
            <header className='app__flex'>
                <h1>Looking for a flight ?</h1>
                <div className="flights__input">
                    <input type="text" ref={searchInput} placeholder="Search for your destination..."/> 
                    <button>{<AiOutlineSearch 
                        onClick={() => {
                            getFlightData();
                        }}/>}</button>
                </div>
            </header>
            <FlightList flights={flights}/>

            
        </div>
    )
}

export default Flights;