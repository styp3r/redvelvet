function ProductBox(props) {
    if (props.category === props.current) {
        return (
            <div id="productBox">
                <img className="itemBoxImg" src={props.img} loading = "lazy" />
                <div className="itemBoxText">
                    <p className="itemBoxName">{props.name}</p>
                    <p className="itemBoxQty">{props.qty}</p>
                </div>
            </div>
        );
    } 
}

export default ProductBox;