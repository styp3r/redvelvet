function ProductBox(props) {
    if (props.category === props.current) {
        return (
            <div id="productBox">
                <img className="itemBoxImg" src={props.img} />
                <div className="itemBoxText">
                    <div className="itemBoxPrice">Rs. {props.price}</div>
                    <p className="itemBoxName">{props.name} <span className="itemBoxQty">{props.qty}</span></p>
                </div>
            </div>
        );
    }
}

export default ProductBox;