import React from 'react';
import { Link } from "react-router-dom";
import HeroImg from '../images/Decoration/heroImg.png';
import LazyLoad from 'react-lazyload';

function Hero(){
    return (
        <div id = "heroSection">
            <div className = "heroBg">
                <div className = "leftHero">
                    <LazyLoad><img className = "heroImgLeft" src = {HeroImg}/></LazyLoad>
                </div>
                <div className = "rightHero">

                    <div className = "rightHeroContent">
                        <h1 className = "rightHeroTitle">Authentic Indian Sweets and Chaats</h1>
                        <p className = "rightHeroSubtext">At Laddoos, we welcome you to dwell into our collection of fresh and tasty food that will leave you wanting more!</p>
                        <Link to = "products"><button className = "exploreMenuBtn">Explore Menu</button></Link >
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default Hero;