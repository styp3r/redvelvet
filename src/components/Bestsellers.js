import React from 'react';
import ItemBox from './BestSellingItemBox';

function Bestsellers(){
    return (
        <div id = "bestsellersSection">
            <div className = "bestSellersBg">
                <div className = "bestSellersContent">
                    <h1 className = "bestSellersTitle">Most Popular Items</h1>
                </div>

                <div className = "BestsellersItems">
                    {/* Map function to display top 5 best seeling items from the menu*/}
                    <ItemBox />
                    <ItemBox />
                    <ItemBox />
                    <ItemBox />
                    <ItemBox />
                </div>
            </div>
            <button className = "seeMoreBtn">See More</button>
        </div>
    );
}

export default Bestsellers;