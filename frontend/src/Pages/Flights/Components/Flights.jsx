import React from 'react';
import '../../../scss/main.scss';
import { AiOutlineSearch } from 'react-icons/ai';


function Flights() {

    return(
        <div className='flights' onLoad={window.scroll(0,0)}>
            <header className='app__flex'>
                <h1>Looking for a flight ?</h1>
                <div className="flights__input">
                    <input type="text" placeholder="Search for your destination..."/> 
                    <button><AiOutlineSearch/></button>
                </div>
            </header>

            <section className='flights__cards'>
                <div>
                    
                </div>
            </section>
        </div>
    )
}

export default Flights;