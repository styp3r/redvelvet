function CategoryLinkBox(props){

    function handleClick(event){
        document.getElementById("sweets").classList.remove("catNameSelected");
        document.getElementById("chaats").classList.remove("catNameSelected");
        document.getElementById("snacks").classList.remove("catNameSelected");
        document.getElementById("parathas").classList.remove("catNameSelected");
        document.getElementById("combos").classList.remove("catNameSelected");
        document.getElementById("beverages").classList.remove("catNameSelected");
        document.getElementById(event.target.id).classList.add("catNameSelected");
    }


    return (
        <p onClick = {handleClick} id = {props.id} className = "categoryLink">{props.name}</p>
    );
}

export default CategoryLinkBox;