import React from 'react';
import ItemBox from './BestSellingItemBox';

function Bestsellers(){
    return (
        <div id = "bestsellersSection">
            <div className = "bestSellersBg">
                <div className = "bestSellersContent">
                    <h1 className = "bestSellersTitle">Best Sellers</h1>
                    <p className = "bestSellersSubtext">Our customers can't get enough of these dishes!</p>
                </div>

                <div className = "BestsellersItems">
                    {/* Map function to display top 5 best seeling items from the menu*/}
                    <ItemBox />
                    <ItemBox />
                    <ItemBox />
                    <ItemBox />
                    <ItemBox />
                    <button>-</button>
                </div>
            </div>
        </div>
    );
}

export default Bestsellers;