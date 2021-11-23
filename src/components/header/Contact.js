import React from 'react';

const Contact = () => {
    return (
        <div className="contact section" id="contact">
        <h2 className="section-title">Contact</h2>
        <h3>This Sector Is Under Construction............
</h3>

        <div className="contact__container bd-grid">
        <form action="" className="contact__form">
                        <input type="text" placeholder="Name" className="contact__input"/>
                        <input type="mail" placeholder="Email" className="contact__input"/>
                        <textarea name="" id="" cols="0" rows="10" className="contact__input"></textarea>
                        <input type="button" value="Enviar" className="contact__button button"/>
                    </form>
        </div>
    </div>
    );
};

export default Contact;