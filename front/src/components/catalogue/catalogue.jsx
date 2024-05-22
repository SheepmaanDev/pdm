import { catalogueList } from '../../data/catalogue'

import './catalogue.sass'

const Catalogue = () => {
    return (
        <div className='catalogue'>
            {catalogueList.map((e, index) => (
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