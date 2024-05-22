import Marc from '../../assets/marc.jpg'

import './contact.sass'

const Contact = () => {
    return (
        <div className='contact'>
            <h2 className='contact__title'>Informations utiles</h2>
            <div className='contact__container'>
                <section className='contact__container__left'>
                    {/* <h3 className='contact__container__left__title'>Produits de Marc</h3> */}
                    <img className='contact__container__left__img' src={Marc} alt='logo Produit de Marc' loading='lazy' />
                    <p className='contact__container__left__para'>90 Rue du Tigneux,</p>
                    <p className='contact__container__left__para'>38840 ST HILAIRE DU ROSIER, France</p>
                    <p className='contact__container__left__para'>(+33) 6 81 40 69 16</p>
                    <a className='contact__container__left__link' href='mailto:hello@produitsdemarc.com'>hello@produitsdemarc.com</a>
                </section>
                <section className='contact__container__right'>
                    <h3 className='contact__container__right__title'>Contactez nous</h3>
                    <form className='contact__container__right__form' action=''>
                        <div className='contact__container__right__form__contact'>
                            <label className='contact__container__right__form__contact__label' htmlFor='contact'>Contact</label>
                            <select className='contact__container__right__form__contact__select' name='contact' id='contact'>
                                <option className='contact__container__right__form__contact__select' value=''>--- Choisir un service ---</option>
                                <option className='contact__container__right__form__contact__select' value=''>Administration</option>
                                <option className='contact__container__right__form__contact__select' value=''>Commercial</option>
                            </select>
                        </div>
                        <div className='contact__container__right__form__mail'>
                            <label className='contact__container__right__form__mail__label' htmlFor='mail'>Adresse e-mail</label>
                            <input className='contact__container__right__form__mail__input' type='email' name='mail' id='mail' placeholder='your@email.com'/>
                        </div>
                        <div className='contact__container__right__form__message'>
                            <label className='contact__container__right__form__message__label' htmlFor='message'>Message</label>
                            <textarea className='contact__container__right__form__message__text' name='message' id='message' placeholder='Comment pouvons nous vous aidez ?' rows='5'></textarea>
                        </div>
                        <div className='contact__container__right__form__condition'>
                            <input className='contact__container__right__form__condition__input' type='checkbox' name='' id='' />
                            <p className='contact__container__right__form__condition__para'>J'accepte les conditions générales et la politique de confidentialité</p>
                        </div>
                        <button className='contact__container__right__form__btn'>Envoyer</button>
                    </form>
                </section>
            </div>
        </div>
    )
}

export default Contact