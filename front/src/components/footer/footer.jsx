import Marc from '../../assets/marc.jpg'

import './footer.sass'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer__rod'></div>
            <div className='footer__content'>
                <img className='footer__content__img' src={Marc} alt='logo Produits de Marc' loading='lazy' />
                <a className='footer__content__link' href='#'>Mentions légales</a>
                <p className='footer__content__para'>© 2024 Produits de Marc</p>
            </div>
        </div>
    )
}

export default Footer