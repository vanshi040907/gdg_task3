import "../App.css"
function Image_box(){
    return (
        <div className="container">
            <div className="image_area">
                <img className="image" src={"/IMAGE_11.jpeg"}></img>
            </div>
            <div className="status">
                <button className="like">❤️</button>
                <span className="like_count">34</span>
                <button className="upvote">👍</button>
                <span className="upvote_count">23</span>
            </div>
        </div>
    )
}

export default Image_box