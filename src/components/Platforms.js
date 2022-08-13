import React from 'react';
import OnlineOrder from '../images/Decoration/onlineOrder.jpg';

function Platforms(){
    return (
        <div id = "platformsSection">
            <div className = "platformsBlocks">
                <div className = "platLeft">
                    <img className = "orderArt" src = {OnlineOrder}/>
                </div>
                <div  className = "platRight">
                    <div className = "platContent">
                        <h3 className = "platformsTitle">Partners</h3>
                        <h1>Simple Way To Order Your Food</h1>
                        <p className = "colorGrey">We have partnered up with the leading delivery executives in the city to give you a seamless way of ordering our food so you can enjoy top-quality deliciousness wherever you are. So, what are you waiting for?</p>
                        <p className = "orderNowText">Order Now!</p>
                        <button className = "swiggy">Swiggy</button>
                        <button className = "zomato">Zomato</button>
                        <button className = "amazon">Amazon</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Platforms;