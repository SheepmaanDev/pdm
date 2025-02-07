import { useState, useEffect } from 'react'

import './carousel.sass'

const Carousel = () => {

    const [carousel, setCarousel] = useState([])
    const [currentIndex, setCurrentIndex] = useState(0)
    useEffect(() => {
        fetch('/data/carousel.json')
            .then((response) => response.json())
            .then((data) => setCarousel(data))
            .catch((error) => console.error('Error fetching data:', error));
    }, [])
    const prevSlide = () => {
        setCurrentIndex(currentIndex === 0 ? carousel.length - 1 : currentIndex - 1);
    }
    const nextSlide = () => {
        setCurrentIndex(currentIndex === carousel.length - 1 ? 0 : currentIndex + 1);
    }
    return (
        <div className='carousel'>
            <div className='carousel__container'>
            <button className='carousel__button carousel__button--left' onClick={prevSlide}>
                &#10094;
            </button>
            <div className='carousel__container__content'>
                <ul className='carousel__container__content__track' style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {carousel.map((item, index) => (
                        <li key={index} className='carousel__container__content__track__slide'>
                            <img src={item.img} alt={item.alt} className='carousel__container__content__track__slide__img' loading='lazy'/>
                        </li>
                    ))}
                </ul>
            </div>
            <button className='carousel__button carousel__button--right' onClick={nextSlide}>
                &#10095;
            </button>
            </div>
        </div>
    )
}

export default Carousel