import MentionsLegales from '../../assets/MentionsLegales.pdf'

import './footer.sass'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer__rod'></div>
            <div className='footer__content'>
                {/* <img className='footer__content__img' src={Marc} alt='logo Produits de Marc' loading='lazy' /> */}
                <a className='footer__content__link' href={MentionsLegales} target='_blank' rel='noreferrer'>Mentions légales</a>
                <h1 className='footer__content__para__hn'>Produits de Marc © 2024</h1>
            </div>
        </div>
    )
}

export default Footer