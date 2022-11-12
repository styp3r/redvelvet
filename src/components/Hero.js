import React from 'react';
import { Link } from "react-router-dom";
import HeroVid from '../images/Decoration/heroVid.mp4';

function Hero() {
    return (
        <div id="heroSection">
            <div className="heroBg">
                <div className="leftHero">
                    {/*<LazyLoad><img className = "heroImgLeft" src = {HeroImg} alt = "loading..."/></LazyLoad>*/}
                    <div className = "vidContainer">
                        <video title = "Loading Video..." className = "video" width="420" height="540" autoPlay loop muted>
                            <source src={HeroVid} type="video/mp4"></source>
                            Your browser does not support the video format.
                        </video>
                    </div>
                </div>
                <div className="rightHero">

                    <div className="rightHeroContent">
                        <h1 className="rightHeroTitle">Authentic Indian Sweets and Chaats</h1>
                        <p className="rightHeroSubtext">At Laddoos, we welcome you to dwell into our collection of fresh and tasty food that will leave you wanting more!</p>
                        <Link to="products"><div className="exploreMenuBtn">Explore Menu <span className="material-symbols-outlined">arrow_circle_right</span></div></Link >
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Hero;

