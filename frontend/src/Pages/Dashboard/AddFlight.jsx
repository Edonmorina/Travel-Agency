import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import '../../scss/main.scss';

const AddFlight = () => {
  const departureDateTimeRef = useRef(null);
  const arrivalDateTimeRef = useRef(null);
  const departureLocationRef = useRef(null);
  const arrivalLocationRef = useRef(null);
  const airlineRef = useRef(null);
  const ticketsLeftRef = useRef(null);
  const priceRef = useRef(null);
  const typeOfFlightRef = useRef(null);
  const stopsRef = useRef(null);

  const refactorDateTime = (dateTime) => {
    const date = new Date(dateTime);
    return date.toISOString().slice(0, 19).replace('T', ' ');
  }

  const clearAllFields = () => {
    clearDepartureDateTimeField();
    clearArrivalDateTimeRef();
    clearDepartureLocationField();
    clearArrivalLocationField();
    clearAirlineField();
    clearTicketsLeftField();
    clearPriceField();
    clearTypeOfFlightField();
    clearStopsField();
  }

  const clearDepartureDateTimeField = () => {
    departureDateTimeRef.current.value = "";
  }

  const clearArrivalDateTimeRef = () => {
    arrivalDateTimeRef.current.value = "";
  }

  const clearDepartureLocationField = () => {
    departureLocationRef.current.value = "";
  }

  const clearArrivalLocationField = () => {
    arrivalLocationRef.current.value = "";
  }

  const clearAirlineField = () => {
    airlineRef.current.value = "";
  }

  const clearTicketsLeftField = () => {
    ticketsLeftRef.current.value = "";
  }

  const clearPriceField = () => {
    priceRef.current.value = "";
  }

  const clearTypeOfFlightField = () => {
    typeOfFlightRef.current.value = "";
  }

  const clearStopsField = () => {
    stopsRef.current.value = "";
  }

  const handleSubmit = async () => {

    const baseUrl = "http://localhost:8066/travel_agency_backend/includes/addFlight.inc.php";
    const formData = new FormData();
    formData.append('departure_dateTime', refactorDateTime(departureDateTimeRef.current.value));
    formData.append('arrival_dateTime', refactorDateTime(arrivalDateTimeRef.current.value));
    formData.append('departure_location', departureLocationRef.current.value);
    formData.append('arrival_location', arrivalLocationRef.current.value);
    formData.append('airline', airlineRef.current.value);
    formData.append('tickets_left', ticketsLeftRef.current.value);
    formData.append('price', priceRef.current.value);
    formData.append('type_of_flight', typeOfFlightRef.current.value);
    formData.append('stops', stopsRef.current.value);
    formData.append('submit', true);

    const response = await axios.post(baseUrl, formData);
    console.log(response);
    
    if(response.headers.error != null && response.headers.error == 'None') {
      clearAllFields();
    }

  }
  return (
    <div className="app__dashboard-addFlight app__flex">
        <input type="datetime-local" className='hotels__input' ref={departureDateTimeRef} placeholder='Departure Date-Time'/>

        <input type="datetime-local" className='hotels__input' ref={arrivalDateTimeRef} placeholder='Arrival Date-Time'/>

        <input type="text" className='hotels__input' ref={departureLocationRef} placeholder='Departure location'/>


        <input type="text" className='hotels__input' ref={arrivalLocationRef} placeholder='Arrival location'/>


        <input type="text" className='hotels__input' ref={airlineRef} placeholder='Airline'/>

        <input type="number" className='hotels__input' ref={ticketsLeftRef} placeholder='Tickets left'/>

        <input type="number" className='hotels__input' ref={priceRef} placeholder='Price'/>

        <input type="text" className='hotels__input' ref={typeOfFlightRef} placeholder='Type of flight'/>

        <input type="number" className='hotels__input' ref={stopsRef} placeholder='Stops'/>


        <button onClick={() => handleSubmit()}>Add Flight</button>
    </div>
  )
}

export default AddFlight;