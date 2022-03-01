import React, { useState, useEffect } from 'react';
import '../../../scss/main.scss';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsArrowLeftShort } from 'react-icons/bs';
import { BsArrowRightShort } from 'react-icons/bs';
import firstImg from '../assets/1.webp';
import secondImg from '../assets/2.webp';
import thirdImg from '../assets/3.webp';

import ImgCarousel from './ImgCarousel';


function Hotels() {

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
            caption: 'Slide 1'
        },
        {
            url: secondImg,
            caption: 'Slide 2'
        },
        {
            url: thirdImg,
            caption: 'Slide 3'
        }
    ]

    return(
        <div className='hotels' onLoad={window.scroll(0,0)}>
            <header className='app__flex'>
                <h1>Looking for a hotel ?</h1>
                <div className="hotels__input">
                    <input type="text" placeholder="Search for your destination..."/> 
                    <button><AiOutlineSearch/></button>
                </div>
            </header>

            <section className='hotels__cards_c'>
                <div className='hotels__cards'>
                    <div className='image'>
                        <img src={slideImages[imgIndex].url} alt="random" />
                        <button className='prev-img' onClick={() => prevImg()}><BsArrowLeftShort /></button>
                        <button className='next-img' onClick={() => nextImg()}><BsArrowRightShort /></button>

                    </div>
                    <div className="hotels__cards__content">
                    <div className="content">
                        <div className="head">
                            <h1>Fairmont Quasar Istanbul</h1>
                            <h4>Sisli</h4>
                        </div>
                        <div className="body">
                            <p><b>Exceptional Fairmont Heritage</b></p>
                            <p>
                                Looking over the Bosporus and nearby shopping malls,
                                indulge in spacious rooms, private balconies and dedicated
                                butler service.
                            </p>
                        </div>
                        <div className="rating">
                            <p><b>4.6/5 </b> <span> </span><span>Wonderful (283 reviews)</span></p>
                        </div>
                    </div>
                    <div className="price-tag">
                        <h1><b>$205</b></h1>
                        <p>per night</p>
                        <p><b>$222 total</b></p>
                        <p>Includes taxes & fees</p>
                    </div>
                    </div>
                    </div>
                
            </section>
        </div>
    )
}

export default Hotels;