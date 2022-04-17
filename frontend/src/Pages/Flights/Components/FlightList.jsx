import React from 'react';
import { GiAirplaneDeparture, GiAirplaneArrival } from 'react-icons/gi';
import { MdAirplanemodeActive } from 'react-icons/md';
import '../../../scss/main.scss';


function FlightList({flights}) {

    if(flights == undefined) {
        return <section className='flights__cards_c'>
            <h1 className='app__flex'>No flights found</h1>
        </section>
    }

    const returnDate = (dateTime) => {
        return dateTime.split(" ")[0].replaceAll("-", ".");
    }
    const returnTime = (dateTime) => {
        const rawTime = dateTime.split(" ")[1];
        const timeArr = rawTime.split(":");
        let hours = timeArr[0];
        let minutes = timeArr[1];
        
        if(parseInt(hours) > 12) {

            hours = hours - 12;
            
            if (hours < 10) return `0${hours}:${minutes} PM`;
            
            
            return `${hours}:${minutes} PM`;
        }

        return `${hours}:${minutes} AM`;
    }

    const returnTicketsLeft = (ticketsLeft) => {
        if(ticketsLeft <= 10) {
            return `${ticketsLeft} more left`;
        }
    }


    return(
        <section className="flights__cards_c">
            {
                flights.map((flight) => {
                    return <div className="flights__cards" key={flight.id}>
                        <div className="flights__cards__fs">
                            <h1>{returnTime(flight.departureTime)} - {returnTime(flight.arrivalTime)}</h1>
                            <h3>{returnDate(flight.departureTime)} - {returnDate(flight.arrivalTime)}</h3>
                            <div className='dep-arav'><GiAirplaneDeparture/><span> </span> <h4>{flight.departureLocation} - {flight.arrivalLocation}</h4><GiAirplaneArrival/> </div>
                            <h4 className='airline'>{flight.airline}</h4>
                        </div>
                    
                        <div className="flights__cards__ss">
                            <div><MdAirplanemodeActive/><h4>5h 45m (1 stop)</h4></div>
                            <div><MdAirplanemodeActive/><h4>1h 50m in Warsaw (WAW)</h4></div>
                        </div>

                        <div className="flights__cards__ts">
                            <h4>{returnTicketsLeft(flight.ticketsLeft)}</h4>
                            <h1><span>$</span>{flight.price}</h1>
                            <p>{flight.flightType}</p>
                        </div>
                    </div>
                })}
        </section>
    )
}

export default FlightList;