import React from 'react';

const Skills = () => {
    return (
        <section className="skills section" id="skills">
        <h2 className="section-title">Skills</h2>

        <div className="skills__container bd-grid">          
            <div>
                <h2 className="skills__subtitle">Profesional Skills</h2>
                <p className="skills__text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit optio id vero amet, alias architecto consectetur error eum eaque sit.</p>
                <div className="skills__data">
                    <div className="skills__names">
                        <i className='bx bxl-html5 skills__icon'></i>
                        <span className="skills__name">HTML5</span>
                    </div>
                    <div className="skills__bar skills__html">

                    </div>
                    <div>
                        <span className="skills__percentage">95%</span>
                    </div>
                </div>
                
               
                <div className="skills__data">
                    <div className="skills__names">
                        <i className='bx bxl-css3 skills__icon'></i>
                        <span className="skills__name">CSS3</span>
                    </div>
                    <div className="skills__bar skills__css">
                        
                    </div>
                    <div>
                        <span className="skills__percentage">85%</span>
                    </div>
                </div>
                <div className="skills__data">
                    <div className="skills__names">
                        <i className='bx bxl-javascript skills__icon' ></i>
                        <span className="skills__name">JAVASCRIPT</span>
                    </div>
                    <div className="skills__bar skills__js">
                        
                    </div>
                    <div>
                        <span className="skills__percentage">70%</span>
                    </div>
                </div>
                <div className="skills__data">
                    <div className="skills__names">
                        <i className='bx bxl-javascript skills__icon' ></i>
                        <span className="skills__name">REACT</span>
                    </div>
                    <div className="skills__bar skills__react">
                        
                    </div>
                    <div>
                        <span className="skills__percentage">85%</span>
                    </div>
                </div>
                <div className="skills__data">
                    <div className="skills__names">
                        <i className='bx bxs-paint skills__icon'></i>
                        <span className="skills__name">NODE JS</span>
                    </div>
                    <div className="skills__bar skills__nodejs">
                        
                    </div>
                    <div>
                        <span className="skills__percentage">90%</span>
                    </div>
                </div>
                <div className="skills__data">
                    <div className="skills__names">
                        <i className='bx bxs-paint skills__icon'></i>
                        <span className="skills__name">EXPRESS JS</span>
                    </div>
                    <div className="skills__bar skills__expressjs">
                        
                    </div>
                    <div>
                        <span className="skills__percentage">75%</span>
                    </div>
                </div>
                <div className="skills__data">
                    <div className="skills__names">
                        <i className='bx bxs-paint skills__icon'></i>
                        <span className="skills__name">MONGO DB</span>
                    </div>
                    <div className="skills__bar skills__mongodb">
                        
                    </div>
                    <div>
                        <span className="skills__percentage">90%</span>
                    </div>
                </div>
               
            </div>
            
            <div>              
            <div>
                <h2 className="skills__subtitle">Currently Learning</h2>
                <p className="skills__text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit optio id vero amet, alias architecto consectetur error eum eaque sit.</p>
                <div className="skills__data">
                    <div className="skills__names">
                        <i className='bx bxl-html5 skills__icon'></i>
                        <span className="skills__name">REDUX</span>
                    </div>
                    <div className="skills__bar skills__redux">

                    </div>
                    
                </div>
                <div className="skills__data">
                    <div className="skills__names">
                        <i className='bx bxl-html5 skills__icon'></i>
                        <span className="skills__name">TYPESCRIPT</span>
                    </div>
                    <div className="skills__bar skills__redux">

                    </div>
                    
                </div>
               
            </div>
            </div>
        </div>
    </section>
    );
};

export default Skills;