import React from 'react';
import "./Navigation.css"
const Footer = () => {
    return (
        <footer className="footer">
            <p className="footer__title">Pixie Coder BD</p>
            <div className="footer__social">
                <a target="_blank" href="https://www.facebook.com/darktyper8901" className="footer__icon"><i className='bx bxl-facebook' ></i></a>
                <a  target="_blank" href="https://www.instagram.com/naymul_mist/" className="footer__icon"><i className='bx bxl-instagram' ></i></a>
                <a href="#" className="footer__icon"><i className='bx bxl-twitter' ></i></a>
            </div>
            <p>&#169; 2020 copyright all right reserved</p>
        </footer>
    );
};

export default Footer;