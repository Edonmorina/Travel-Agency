import React from 'react';
import '../../../scss/main.scss';
import { AiOutlineSearch } from 'react-icons/ai';


function Hotels() {

    return(
        <div className='hotels' onLoad={window.scroll(0,0)}>
            <header className='app__flex'>
                <h1>Looking for a hotel ?</h1>
                <div className="hotels__input">
                    <input type="text" placeholder="Search for your destination..."/> 
                    <button><AiOutlineSearch/></button>
                </div>
            </header>

            <section className='hotels__cards'>
                <div>
                    
                </div>
            </section>
        </div>
    )
}

export default Hotels;