import React from 'react';
import "./Navigation.css"

const About = () => {
    return (
        <section className="about section " id="about">
                <h2 className="section-title">About</h2>

                <div className="about__container bd-grid">
                    <div className="about__img">
                        <img src="./242560042_1565306457139367_2812901443804286291_n.jpg" alt=""/>
                    </div>
                    
                    <div>
                        <h2 className="about__subtitle">I'am Nayem</h2>
                        <p className="about__text">Hi! I am a web designer/developer focused on crafting great web experiences. Designing and Coding have been my passion since the days I started working with computers but I found myself into web design/development since 2017. I enjoy creating beautifully designed, intuitive and functional websites.</p>           
                    </div>                                   
                </div>
            </section>
    );
};

export default About;