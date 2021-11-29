import React from 'react';
import "./Navigation.css"
const Work = () => {
    return (
        <section className="work section" id="work">
        <h2 className="section-title">Work - Latest Projects Demo</h2>
       

        <div className="work__container bd-grid">
            
            <div className="work__img">
                <img src="./creenshot (4).png" alt=""/>
                <a href="https://processor-ecommerce.web.app/" target="_blank">
                <button className="project_button">VISIT </button>
                </a>
            </div>
           
            <div className="work__img">
                <img src="./screenshot (4awd).png" alt=""/>
                <a href="https://online-food-bd.netlify.app/" target="_blank">
                <button className="project_button">VISIT </button>
                </a>
              
            </div>
            <div className="work__img">
                <img src="./tour.png" alt=""/>
                <a href="https://assignment-11-5ea38.web.app/" target="_blank">
                <button className="project_button">VISIT </button>
                </a>
            </div>
          
         
          
            
        </div>
    </section>
    );
};

export default Work;