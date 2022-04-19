import React, { useState } from 'react';
import '../../../scss/main.scss';
import { BsArrowLeftShort } from 'react-icons/bs';
import { BsArrowRightShort } from 'react-icons/bs';

import firstImg from '../assets/slide_images/1.jpg';
import secondImg from '../assets/slide_images/2.jpg';
import thirdImg from '../assets/slide_images/3.jpg';


function HomePageSecondSection() {

    const [imgIndex, setImgIndex] = useState(0);

    const prevImg = () => {
        if(imgIndex === 0) {
            setImgIndex(slideImages.length - 1);
        } else {
            setImgIndex(imgIndex - 1);
        }

    }

    const nextImg = () => {
        if(imgIndex === (slideImages.length - 1)) {
            setImgIndex(0);
        } else {
            setImgIndex(imgIndex + 1);
        }
    }

    const slideImages = [
        {
            url: firstImg,
            caption: 'Slide 1',
            title: 'Philippines',
        },
        {
            url: secondImg,
            caption: 'Slide 2',
            title: 'Greece',
        },
        {
            url: thirdImg,
            caption: 'Slide 3',
            title: 'Austria',
        }
    ]

    return (
        <section className='home-ss'>
            <div className="img-c"><img src={slideImages[imgIndex].url} alt="random" /></div>
            <button className='prev-img' onClick={() => prevImg()}><BsArrowLeftShort /></button>
            <button className='next-img' onClick={() => nextImg()}><BsArrowRightShort /></button>
            <h1>{slideImages[imgIndex].title}</h1>
        </section>
    )
}

export default HomePageSecondSection;