import "../css/image_box.css"
import myImage from '../assets/IMAGE_11.jpeg';

function Image_box(){
    function onFavouriteClick(){
        alert("clicked");
    }

    return (
        <div className="container">
            <div className="image_area">
                <img className="image" src={myImage}></img>
                <div className="favorite-overlay">
                    <button className="favourite-btn" onClick={onFavouriteClick}>❤️</button>
                </div>
            </div>
        </div>
    )
}

export default Image_box

