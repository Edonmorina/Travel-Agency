import firstImage from '../assets/slide_images/firstSlideImage.jpg';
import secondImage from '../assets/slide_images/secondSlideImage.jpg';
import thirdImage from '../assets/slide_images/thirdSlideImage.jpeg';


export const SliderData = [
    {
        image: <img src={firstImage}  className="carousel__image" alt="quotes" />
    },
    {
        image: <img src={secondImage}  className="carousel__image" alt="quotes" />
    },
    {
        image: <img src={thirdImage} className="carousel__image" alt="quotes" />
    }
]