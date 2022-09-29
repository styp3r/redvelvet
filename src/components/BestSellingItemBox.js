import React from 'react';
import LazyLoad from 'react-lazy-load';

function BestSellingItemBox(props){
    return (
        <div id = "bestSellingItemBox">
            <LazyLoad width = "100%" height = "100%"><img className = "bestSellerBoxImg" src = {props.img} key = {props.key} alt = ""/></LazyLoad>
        </div>
    );
}

export default BestSellingItemBox;