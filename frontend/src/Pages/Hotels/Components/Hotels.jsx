import React, { useState, useEffect, useRef } from 'react';
import '../../../scss/main.scss';
import { AiOutlineSearch } from 'react-icons/ai';
import axios from 'axios';
import HotelsList from './HotelsList';


function Hotels() {
    const searchInput = useRef("");
    const [hotels, setHotels] = useState([]);

    const handleSearchKeyDown = (e) => {
        if(e.keyCode === 13) {
            e.preventDefault();
            getHotelData();
        }
    }

    useEffect(() => {

        searchInput.current.addEventListener("keypress", handleSearchKeyDown)

        getHotelData();
    }, [])

    

    const getHotelData = async () => {
        const formData = new FormData();
        formData.append('hotelSearchTerm', searchInput.current.value);
        const res = await axios.post('http://localhost:8066/travel_agency_backend/includes/searchHotel.inc.php', formData);
        setHotels(res.data.hotels);
    }

    return(
        <div className='hotels' onLoad={window.scroll(0,0)}>
            <header className='app__flex'>
                <h1>Looking for a hotel ?</h1>
                <div className="hotels__input">
                    <input type="text" ref={searchInput} placeholder="Search for a hotel..."/> 
                    <button>{<AiOutlineSearch 
                        onClick={() => {
                            getHotelData();
                        }}/>}</button>
                </div>
            </header>
                <HotelsList hotels={hotels}/>
        
        </div>
    )
}

export default Hotels;