import "../css/image_box.css"

function Image_box(x){
    function onFavouriteClick(){
        alert("clicked");
    }

    return (
        <div className="container">
            <div className="image_area">
                <img className="image" src={"/IMAGE_11.jpeg"}></img>
                <div className="favorite-overlay">
                    <button className="favourite-btn" onClick={onFavouriteClick}>❤️</button>
                </div>
            </div>
        </div>
    )
}

export default Image_box
