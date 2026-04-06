import "../css/favorites.css"
import React, { useEffect, useState } from "react";
import Footer from "../components/footer.jsx";
function Favourites() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFavourites = async () => {
      try {
        const res = await fetch("http://localhost:1111/favourites", {
          method: "GET",
          credentials: "include",
        });

        const data = await res.json();
        console.log(data); 
        setPhotos(data);
      } catch (err) {
        console.error("Error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchFavourites();
  }, []);

  const handleImageLoad = (e) => {
  const card = e.target.closest('.container');
  const imgHeight = e.target.naturalHeight;
  const imgWidth = e.target.naturalWidth;
  const cardWidth = card.offsetWidth;

  // Scale height proportionally
  const displayHeight = (imgHeight / imgWidth) * cardWidth;
  const rowSpan = Math.ceil((displayHeight +40) / (34)); // rowSize + gap
  card.style.gridRowEnd = `span ${rowSpan}`;
    };


  return (
    <>
      <div className="favorites-container">
        <h2>Your Favourite Photos ❤️</h2>

        {loading ? (
          <p>Loading...</p>
        ) : photos.length === 0 ? (
          <p>No favourites yet</p>
        ) : (
          <div className="fav-container">
            {photos.map((photo) => (
              <div 
                key={photo._id} 
                className="container"
                style={{gridRowEnd:`span ${photo.span || 1}
                `}}>
                <div className="image_area">
                <img
                  src={photo.photofilename}
                  alt="fav"
                  className="image"
                  onLoad={handleImageLoad}
                />
                </div>
                {/* <p>{photo.photofilename}</p> */}
                
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}

export default Favourites;