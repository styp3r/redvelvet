import LazyLoad from 'react-lazy-load';

function ProductBox(props) {

    let itemDescription = props.desc.slice(0, 60);

    function handleReadMoreBtn() {
        document.getElementById(props.id).style.display = "block";
    }

    function handleCloseDescBtn() {
        document.getElementById(props.id).style.display = "none";
    }


    if (props.category === props.current) {
        return (
            <div id="productBox">
                <div className="productBoxContainer">
                    {/*<LazyLoad width = "100%" height = "60%">*/}<img alt="loading..." className="itemBoxImg" src={props.img} />
                    <div className="descModalContainer" id = {props.id}>
                        <p onClick={handleCloseDescBtn} className="closeDescBtn"><span className="material-symbols-outlined">navigate_before</span></p>
                        <div className="descModal">{props.desc}</div>
                    </div>
                    <div className="itemBoxText">
                        <p className="itemBoxName">{props.name}</p>
                        {/*<p className="itemBoxQty">{props.qty}</p>*/}
                        <p className="itemBoxDesc">{itemDescription}...</p>
                        <p onClick={handleReadMoreBtn} className="readMore">Read More </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductBox;