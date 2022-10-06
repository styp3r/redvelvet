import React from 'react';
import { Link } from "react-router-dom";
import HeroImg from '../images/Decoration/heroImg.png';
import LazyLoad from 'react-lazy-load';

function Hero(){
    return (
        <div id = "heroSection">
            <div className = "heroBg">
            {/*<LazyLoad><img className = "brush" src = {Brush} width = "500" height = "500" /></LazyLoad>*/}
                <div className = "leftHero">
                    <LazyLoad><img className = "heroImgLeft" src = {HeroImg}/></LazyLoad>
                </div>
                <div className = "rightHero">

                    <div className = "rightHeroContent">
                        <h1 className = "rightHeroTitle">Authentic Indian Sweets and Chaats</h1>
                        <p className = "rightHeroSubtext">At Laddoos, we welcome you to dwell into our collection of fresh and tasty food that will leave you wanting more!</p>
                        <Link to = "products"><div className = "exploreMenuBtn">Explore Menu <span class="material-symbols-outlined">arrow_circle_right</span></div></Link >
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default Hero;

