import React from 'react';

function BestSellingItemBox(props){
    return (
        <div id = "bestSellingItemBox">
            <img className = "bestSellerBoxImg" src = {props.img} />
        </div>
    );
}

export default BestSellingItemBox;