import React from 'react';
import { Link } from "react-router-dom";

function About(){
    return (
        <div id = "aboutSection">
            <div className = "aboutBlocks">
                <div className = "blockLeft"></div>
                <div className = "blockRight">
                    <div className = "aboutContent">
                        <h3 className = "aboutTitle">About Us</h3>
                        <h1>Simple Way Of Eating Delicious</h1>  
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                        <Link to = "about"><button className = "exploreStoryBtn">Explore Our Story</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;