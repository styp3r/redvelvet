import React from 'react';
import ItemBox from './BestSellingItemBox';
import { Link } from "react-router-dom";
import ItemList from './ItemList';

function Bestsellers(){

    function dispBest(best){
        if(best.bestseller === true){
            return <ItemBox img = {best.img}/>;
        }
    }

    return (
        <div id = "bestsellersSection">
            <div className = "bestSellersBg">
                <div className = "bestSellersContent">
                    <h1 className = "bestSellersTitle">Most Popular Items</h1>
                </div>

                <div className = "BestsellersItems">
                    {ItemList.map(dispBest)}
                </div>
            </div>
            <Link to = "products"><button className = "seeMoreBtn">See More</button></Link>
        </div>
    );
}

export default Bestsellers;