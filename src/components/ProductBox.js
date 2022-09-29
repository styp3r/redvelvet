import LazyLoad from 'react-lazy-load';

function ProductBox(props) {
    if (props.category === props.current) {
        return (
            <div id="productBox">
                <LazyLoad width = "100%" height = "60%"><img className="itemBoxImg" src={props.img} /></LazyLoad>
                <div className="itemBoxText">
                    <p className="itemBoxName">{props.name}</p>
                    <p className="itemBoxQty">{props.qty}</p>
                </div>
            </div>
        );
    }
}

export default ProductBox;