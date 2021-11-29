import React from 'react';
import "./Navigation.css"
const Home = () => {
    return (
        <div>
           
             <section className="home bd-grid" id="home">
             <div className="gome-img" >    
                    <img width="300px" src="./244974315_1580074818995864_7755175154553834209_n (1).jpg" alt=""/>
                </div>
                <div className="home__data">
                    <h1 className="home__title">Hi,<br/>I'am <span className="home__title-color">Nayem</span><br/> Web Developer</h1>

                    <a target="_blank" href="https://drive.google.com/file/d/1epeqyhPYj4xb58599GLpH1gkuaHoLSq2/view?usp=sharing
">
                        <button className="downloadresume" >
                            DOWNLOAD RESUME
                        </button>
                    </a>
                   
                    <div className="home__social">
                        
                    <a target="_blank" href="https://github.com/pixiem
">
                        <img src="./github_original_wordmark_logo_icon_146506.png" alt="" />
                    </a>
                   
                    <a target="_blank" href="https://www.linkedin.com/in/naymul-islam-4087a317b/
">
                        <img src="./linkedin_black_logo_icon_147114.png" alt="" />
                    </a>
                   
                   
                   
                </div>

                   
                </div>

               

                
            </section>
            
        </div>
    );
};
export default Home;