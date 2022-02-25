import React, { useState, useEffect, useRef } from 'react';
import '../../../scss/main.scss';
import RandomQuoteList from '../quotes/randomQuoteList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import axios from 'axios';

function Quotes() {

    const searchInput = useRef("");
    const [quotes, setQuotes] = useState([]);

    const handleSearchKeyDown = (e) => {
        if(e.keyCode === 13) {
            e.preventDefault();
            getQuoteData();
        }
    }

    useEffect(() => {

        

        searchInput.current.addEventListener("keypress", handleSearchKeyDown)

        getQuoteData();

        
    }, [])
    

    const getQuoteData = async () => {
        const formData = new FormData();
        formData.append('searchTerm', searchInput.current.value);
        const res = await axios.post('http://localhost:8066/quotes_app_backend/classes/models/search-read.php', formData);
        setQuotes(res.data.quotes);
    }



    return(
        <div className='quotes' onLoad={window.scroll(0,0)}>
            <div className="search-bar">
                <h1>Search Quotes</h1>
                <div>
                <div>
                    <input type="text" ref={searchInput}/>
                    <button>
                        {<FontAwesomeIcon 
                        icon={faSearch} 
                        onClick={() => {
                            getQuoteData();
                        }}/>}
                        </button>
                </div>
                </div>
            </div>
           <RandomQuoteList quotes={quotes}/>
        </div>
    )
}

export default Quotes;