import React from 'react';
import '../../../scss/main.scss';
import { AiOutlineSearch } from 'react-icons/ai';
import { GiAirplaneDeparture, GiAirplaneArrival } from 'react-icons/gi';
import { MdAirplanemodeActive } from 'react-icons/md';


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

            <section className='flights__cards_c'>
                <div className="flights__cards">
                    <div className="flights__cards__fs">
                        <h1>10:05am - 5:50pm</h1>
                        <div className='dep-arav'><GiAirplaneDeparture/><span> </span> <h4>Prague (PRG) - Istanbul (IST)</h4><GiAirplaneArrival/> </div>
                        <h4 className='airline'>LOT-Polish Airlines</h4>
                    </div>

                    <div className="flights__cards__ss">
                        <div><MdAirplanemodeActive/><h4>5h 45m (1 stop)</h4></div>
                        <div><MdAirplanemodeActive/><h4>1h 50m in Warsaw (WAW)</h4></div>
                    </div>

                    <div className="flights__cards__ts">
                        <h4>1 more left</h4>
                        <h1>$306.72</h1>
                        <p>Roundtrip per traveler</p>
                    </div>
                </div>

                <div className="flights__cards">
                    <div className="flights__cards__fs">
                        <h1>10:05am - 5:50pm</h1>
                        <div className='dep-arav'><GiAirplaneDeparture/><span> </span> <h4>Prague (PRG) - Istanbul (IST)</h4><GiAirplaneArrival/> </div>
                        <h4 className='airline'>LOT-Polish Airlines</h4>
                    </div>

                    <div className="flights__cards__ss">
                        <div><MdAirplanemodeActive/><h4>5h 45m (1 stop)</h4></div>
                        <div><MdAirplanemodeActive/><h4>1h 50m in Warsaw (WAW)</h4></div>
                    </div>

                    <div className="flights__cards__ts">
                        <h4>1 more left</h4>
                        <h1>$306.72</h1>
                        <p>Roundtrip per traveler</p>
                    </div>
                </div>

                <div className="flights__cards">
                    <div className="flights__cards__fs">
                        <h1>10:05am - 5:50pm</h1>
                        <div className='dep-arav'><GiAirplaneDeparture/><span> </span> <h4>Prague (PRG) - Istanbul (IST)</h4><GiAirplaneArrival/> </div>
                        <h4 className='airline'>LOT-Polish Airlines</h4>
                    </div>

                    <div className="flights__cards__ss">
                        <div><MdAirplanemodeActive/><h4>5h 45m (1 stop)</h4></div>
                        <div><MdAirplanemodeActive/><h4>1h 50m in Warsaw (WAW)</h4></div>
                    </div>

                    <div className="flights__cards__ts">
                        <h4>1 more left</h4>
                        <h1>$306.72</h1>
                        <p>Roundtrip per traveler</p>
                    </div>
                </div>

                <div className="flights__cards">
                    <div className="flights__cards__fs">
                        <h1>10:05am - 5:50pm</h1>
                        <div className='dep-arav'><GiAirplaneDeparture/><span> </span> <h4>Prague (PRG) - Istanbul (IST)</h4><GiAirplaneArrival/> </div>
                        <h4 className='airline'>LOT-Polish Airlines</h4>
                    </div>

                    <div className="flights__cards__ss">
                        <div><MdAirplanemodeActive/><h4>5h 45m (1 stop)</h4></div>
                        <div><MdAirplanemodeActive/><h4>1h 50m in Warsaw (WAW)</h4></div>
                    </div>

                    <div className="flights__cards__ts">
                        <h4>1 more left</h4>
                        <h1>$306.72</h1>
                        <p>Roundtrip per traveler</p>
                    </div>
                </div>

                <div className="flights__cards">
                    <div className="flights__cards__fs">
                        <h1>10:05am - 5:50pm</h1>
                        <div className='dep-arav'><GiAirplaneDeparture/><span> </span> <h4>Prague (PRG) - Istanbul (IST)</h4><GiAirplaneArrival/> </div>
                        <h4 className='airline'>LOT-Polish Airlines</h4>
                    </div>

                    <div className="flights__cards__ss">
                        <div><MdAirplanemodeActive/><h4>5h 45m (1 stop)</h4></div>
                        <div><MdAirplanemodeActive/><h4>1h 50m in Warsaw (WAW)</h4></div>
                    </div>

                    <div className="flights__cards__ts">
                        <h4>1 more left</h4>
                        <h1>$306.72</h1>
                        <p>Roundtrip per traveler</p>
                    </div>
                </div>
            </section>

            
        </div>
    )
}

export default Flights;