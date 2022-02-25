import React, { useState} from 'react';
import '../../../scss/main.scss'

const ImageSlider = ({ slides }) => {
    return (
        <div className="carousel">
            <button className="carousel__button carousel__button--left">left</button>
            <div className="carousel_track-container">
                <ul className="carousel__track">
                    {
                        slides.map((element, index) => {
                          return <li className="carousel__slide" key={index}>{element.image}</li>
                        })
                    }
                </ul>
            </div>
            <button className="carousel__button carousel__button--right">right</button>

            <div className="carousel__nav">
                <button className="carousel_indicator"></button>
                <button className="carousel_indicator"></button>
                <button className="carousel_indicator"></button>
            </div>
        </div>
    )
}

export default ImageSlider;