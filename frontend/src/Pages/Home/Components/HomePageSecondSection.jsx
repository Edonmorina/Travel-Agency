import React from 'react';
import '../../../scss/main.scss';
import ImageSlider from '../Components/ImageSlider';
import { SliderData } from './SliderData';

function HomePageSecondSection() {

    return (
        <div className="home-ss">
            <ImageSlider slides={SliderData}/>
        </div>
    )
}

export default HomePageSecondSection;