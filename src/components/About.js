import React from 'react';
import DahiPuri from '../images/Decoration/rajKach.png';
import { Link } from "react-router-dom";

function About(){
    return (
        <div id = "aboutSection">
            <div className = "aboutBlocks">
                <div className = "blockLeft">
                    <img className = "dahiPuri" src = {DahiPuri}/>
                </div>
                <div className = "blockRight">
                    <div className = "aboutContent">
                        <h3 className = "aboutTitle">About Us</h3>
                        <h1>Simple Way Of Eating Delicious</h1>  
                        <p  className = "colorGrey">We make food that is simple and elegant with that lip-smacking sensation whether it be the vintage Vada Pavs, the round and crisp Pani Puris, or our filling Chole Bhatures! Explore about us to know how we do what we do best!</p>
                        <Link to = "about"><button className = "exploreStoryBtn">Explore Our Story</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;