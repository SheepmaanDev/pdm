import MentionsLegales from '../../assets/MentionsLegales.pdf'

import './footer.sass'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer__rod'></div>
            <div className='footer__content'>
                {/* <img className='footer__content__img' src={Marc} alt='logo Produits de Marc' loading='lazy' /> */}
                <a className='footer__content__link' href={MentionsLegales} target='_blank' rel='noreferrer'>Mentions légales</a>
                <p className='footer__content__para'><h1 className='footer__content__para__hn'>Produits de Marc</h1> © 2024</p>
            </div>
        </div>
    )
}

export default Footer