import React from 'react';
import ItemBox from './BestSellingItemBox';
import { Link } from "react-router-dom";
import IMAGES from './ImagesImport';

function Bestsellers(){
    return (
        <div id = "bestsellersSection">
            <div className = "bestSellersBg">
                <div className = "bestSellersContent">
                    <h1 className = "bestSellersTitle">Most Popular Items</h1>
                </div>

                <div className = "BestsellersItems">
                    {/* Map function to display top 5 best seeling items from the menu*/}
                    <ItemBox img = {IMAGES.samosa}/>
                    <ItemBox img = {IMAGES.samosa}/>
                    <ItemBox img = {IMAGES.samosa}/>
                    <ItemBox img = {IMAGES.samosa}/>
                    <ItemBox img = {IMAGES.samosa}/>
                </div>
            </div>
            <Link to = "products"><button className = "seeMoreBtn">See More</button></Link>
        </div>
    );
}

export default Bestsellers;