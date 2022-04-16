import React, { useState } from 'react';
import '../../../scss/main.scss';
import { BsArrowLeftShort } from 'react-icons/bs';
import { BsArrowRightShort } from 'react-icons/bs';
import firstImg from '../assets/1.webp';
import secondImg from '../assets/2.webp';
import thirdImg from '../assets/3.webp';


function HotelsList({hotels}) {
    
    const [imgIndex, setImgIndex] = useState(0);

    if(hotels === undefined) {
        return <section className='flights__cards_c'>
            <h1 className='app__flex'>No hotels found</h1>
        </section>
    }


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
        <section className="hotels__cards_c">
            {
                hotels.map((hotel) => {
                    return <div className='hotels__cards'>
                    <div className='image'>
                        <img src={slideImages[imgIndex].url} alt="random" />
                        <button className='prev-img' onClick={() => prevImg()}><BsArrowLeftShort /></button>
                        <button className='next-img' onClick={() => nextImg()}><BsArrowRightShort /></button>

                    </div>
                    <div className="hotels__cards__content">
                    <div className="content">
                        <div className="head">
                            <h1>{hotel.name}</h1>
                            <h4>{hotel.location}</h4>
                        </div>
                        <div className="body">
                            <p><b>{hotel.titleDescription}</b></p>
                            <p>{hotel.description}</p>
                        </div>
                        <div className="rating">
                            <p><b>{hotel.rating}/5 </b> <span> </span><span>({hotel.reviews} reviews)</span></p>
                        </div>
                    </div>
                    <div className="price-tag">
                        <h1><b><span>$</span>{hotel.price}</b></h1>
                        <p>per night</p>
                        <p><b>$222 total</b></p>
                        <p>Includes taxes & fees</p>
                    </div>
                    </div>
                    </div>

                })}
        </section>
    )
}

export default HotelsList;