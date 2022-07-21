import React from 'react';
import ProductBox from './ProductBox';
import ItemList from './ItemList';
import CategoryList from './CategoryList';
import CategoryLinkBox from './CategoryLinkBox';

function ProductsPage() {

    function dispItems(item) {
        return <ProductBox key={item.id} img={item.img} price={item.price} name={item.name} qty={item.qty} />
    }

    function dispCategory(cat){
        return <CategoryLinkBox key = {cat.id} id = {cat.id} name = {cat.name} class = {cat.class} />
    }

    return (
        <div id="productDisp">
            <h1 className="prodDispTitle">Products Page</h1>
            <div className="prodDispBlock">
                <div className="productLeft">
                    <div className="categoryPane">
                        {CategoryList.map(dispCategory)}
                    </div>
                </div>
                <div className="productRight">
                    {ItemList.map(dispItems)}
                </div>
            </div>
        </div>
    );
}

export default ProductsPage;