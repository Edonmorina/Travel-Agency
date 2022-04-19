import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';

import '../../scss/main.scss';

const AddHotel = () => {
  const hotelNameRef = useRef(null);
  const hotelLocationRef = useRef(null);
  const descriptiontitleRef = useRef(null);
  const descriptionRef = useRef(null);
  const ratingRef = useRef(null);
  const reviewsRef = useRef(null);
  const priceRef = useRef(null);

  const clearAllFields = () => {
    clearHotelNameField();
    clearLocationField();
    clearDescriptionTitleField();
    clearDescriptionField();
    clearRatingField();
    clearReviewsField();
    clearPriceField();
  }

  const clearHotelNameField = () => {
    hotelNameRef.current.value = "";
  }

  const clearLocationField = () => {
    hotelLocationRef.current.value = "";
  }

  const clearDescriptionTitleField = () => {
    descriptiontitleRef.current.value = "";
  }

  const clearDescriptionField = () => {
    descriptionRef.current.value = "";
  }

  const clearRatingField = () => {
    ratingRef.current.value = "";
  }

  const clearReviewsField = () => {
    reviewsRef.current.value = "";
  }

  const clearPriceField = () => {
    priceRef.current.value = "";
  }

  const handleSubmit = async () => {

    const baseUrl = "http://localhost:8066/travel_agency_backend/includes/addHotel.inc.php";
    const formData = new FormData();
    formData.append('hotel_name', hotelNameRef.current.value);
    formData.append('hotel_location', hotelLocationRef.current.value);
    formData.append('description_title', descriptiontitleRef.current.value);
    formData.append('description', descriptionRef.current.value);
    formData.append('rating', ratingRef.current.value);
    formData.append('reviews', reviewsRef.current.value);
    formData.append('price', priceRef.current.value);
    formData.append('submit', true);

    const response = await axios.post(baseUrl, formData);
    console.log(response);

    clearAllFields();
  }


  return (
    <div className="app__dashboard-addHotel app__flex">

          <input type="text" className='hotels__input' ref={hotelNameRef} placeholder='Hotel name'/>

          <input type="text" className='hotels__input' ref={hotelLocationRef} placeholder='Hotel location'/>

          <input type="text" className='hotels__input' ref={descriptiontitleRef} placeholder='Description title'/>

          <input type="text" className='hotels__input' ref={descriptionRef} placeholder='Description'/>

          <input type="number" className='hotels__input' ref={ratingRef} placeholder='Rating'/>

          <input type="number" className='hotels__input' ref={reviewsRef} placeholder='Reviews'/>

          <input type="number" className='hotels__input' ref={priceRef} placeholder='Price'/>

        <button onClick={() => handleSubmit()}>Add Hotel</button>
    </div>
  )
}

export default AddHotel;