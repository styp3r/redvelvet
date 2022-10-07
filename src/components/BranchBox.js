function BranchBox(props) {

    return (
        <div id="branchBox">
            <img alt = "loading..." className = "branchImg" src={props.img} />
            <h3>Laddoos - {props.name}</h3>
            <p>Address: {props.address}</p>
            <p>Phone: {props.phone}</p>
            <a aria-label="Redirects user to respective shop location on Google Maps" target = "_blank" rel="noreferrer" href = {props.mapLink}><button className = "viewInMapBtn">View In Map</button></a>
        </div>
    );
}

export default BranchBox;