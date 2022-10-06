import React from 'react';
import OnlineOrder from '../images/Decoration/takeAway.png';
import LazyLoad from 'react-lazy-load';

function Platforms() {

    return (
        <div id="platformsSection">
            <div className="platformsBlocks">
                <div className="platLeft">
                    <LazyLoad><img className="orderArt" src={OnlineOrder} alt="Loading..." /></LazyLoad>
                </div>
                <div className="platRight">
                    <div className="platContent">
                        <h3 className="platformsTitle">Partners</h3>
                        <h1>Simple Way To Order Your Food</h1>
                        <p className="colorGrey">We have partnered up with the leading delivery executives in the city to give you a seamless way of ordering our food so you can enjoy top-quality deliciousness wherever you are. So, what are you waiting for?</p>
                        <p className="orderNowText">Order Now!</p>
                        <a target = "_blank" href = "https://www.swiggy.com/"><button className="swiggy">Swiggy</button></a>
                        <a target = "_blank" href = "https://www.zomato.com/"><button className="zomato">Zomato</button></a>
                        <a target = "_blank" href ="https://www.amazon.in/primefood/"><button className="amazon">Amazon</button></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Platforms;