import { useState, useEffect } from 'react'

import './catalogue.sass'

const Catalogue = () => {
    const [carousel, setCarousel] = useState([])
    useEffect(() => {
        fetch('/data/catalogue.json')
            .then((response) => response.json())
            .then((data) => setCarousel(data))
            .catch((error) => console.error('Error fetching data:', error));
    }, [])
    return (
        <div className='catalogue'>
            {carousel.map((e) => (
                <div className='catalogue__card' key={e.id}>
                    <h2 className='catalogue__card__title'>{e.name}</h2>
                    <a href={e.href}>
                        <img className='catalogue__card__img' src={e.img} alt={e.alt} loading='lazy' />
                    </a>
                </div>
            ))}
        </div>
    )
}

export default Catalogue