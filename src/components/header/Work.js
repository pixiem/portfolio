import React from 'react';
import "./Navigation.css"
const Work = () => {
    return (
        <section className="work section" id="work">
        <h2 className="section-title">Work</h2>
        <h3>This Sector Is Under Construction............</h3>

        <div className="work__container bd-grid">
            <div className="work__img">
                <img src="assets/img/work1.jpg" alt=""/>
            </div>
            <div className="work__img">
                <img src="assets/img/work2.jpg" alt=""/>
            </div>
            
            <div className="work__img">
                <img src="assets/img/work3.jpg" alt=""/>
            </div>
            <div className="work__img">
                <img src="assets/img/work4.jpg" alt=""/>
            </div>
            <div className="work__img">
                <img src="assets/img/work5.jpg" alt=""/>
            </div>
            <div className="work__img">
                <img src="assets/img/work6.jpg" alt=""/>
            </div>
        </div>
    </section>
    );
};

export default Work;