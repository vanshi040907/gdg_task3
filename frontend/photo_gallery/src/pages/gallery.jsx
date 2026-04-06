import React, { useState, useEffect } from 'react'
import '../css/gallery.css'
import Footer from '../components/footer.jsx'
import axios from 'axios'
import { io } from 'socket.io-client'
import "../css/image_box.css"
import { motion, AnimatePresence } from 'framer-motion';


const socket = io("http://localhost:1111");

function Gallery() {
    const [photos, setPhotos] = useState([]);
    const BASE_URL = "http://localhost:1111";
    const [spinningPhotos, setSpinningPhotos] = useState({}); 
    const [showHeart, setShowHeart] = useState(false); 

    useEffect(() => {
        // Fetch existing photos
        async function fetchPhotos() {
      const res = await fetch(`${BASE_URL}/photo`);
      const data = await res.json();

      const updated = await Promise.all(
        data.map(async (p) => {
          const voteRes = await fetch(
            `${BASE_URL}/upvoteshow/${encodeURIComponent(p.photofilename)}`
          );
          const vote = await voteRes.json();
          return { ...p, count: vote.count };
        })
      );

      setPhotos(updated);
    }

    fetchPhotos();
    }, []);

    // socket update
    useEffect(() => {
    socket.on("photofile", async (photo) => {
      const res = await fetch(
        `${BASE_URL}/upvoteshow/${encodeURIComponent(photo)}`
      );
      const vote = await res.json();

      setPhotos((prev) => [
        ...prev,
        { photofilename: photo, count: vote.count },
      ]);
    });

    socket.on("count", (x) => {
      setPhotos((prev) =>
                prev.map((p) => {
                    if (p.photofilename === x.id) {
                        
                        // ✅ trigger spin exactly when count hits 3
                        if (x.count === 3) {
                            setSpinningPhotos(prev => ({
                                ...prev,
                                [x.id]: true
                            }));

                            // ✅ stop spin after animation completes
                            setTimeout(() => {
                                setSpinningPhotos(prev => ({
                                    ...prev,
                                    [x.id]: false
                                }));
                            }, 800);
                        }

                        return { ...p, count: x.count };
                    }
                    return p;
         })
      );
    });

    return () => {
      socket.off("photofile");
      socket.off("count");
    };
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

    //managing upvote in real time
    const handleUpvote = async (filename) => {
    const res = await fetch(
      `${BASE_URL}/upvote/${encodeURIComponent(filename)}`,
      {
        method: "POST",
        credentials: "include",
      }
    );

    if (res.status === 401) {
      window.location.href = `/login`;
    }

    setShowHeart(true);
    setTimeout(() => setShowHeart(false), 1000);

  };

    return (
        <>
            <div className="gallery-container">
                {photos.map((p) => (
                    <motion.div 
                        className="container" 
                        key={p.photofilename}
                        animate={{rotate: spinningPhotos[p.photofilename] ? 360 : 0 }}
                        transition={{ duration: 0.8, ease: 'easeInOut' }}
                        style={{
                          background: (p.count >= 3) 
                          ? 'linear-gradient(to right, rgb(50, 20, 86, 1), rgb(66, 1, 86, 1), rgb(85, 1, 1, 1))' 
                          : 'transparent',
                          boxShadow:'2px, 2px, 10px, rgba(255,255,255,1)',
                          transition: 'background 0.5s ease',
                          gridRowEnd: `span ${p.span || 1}`
}}>
                        <div className="image_area" >
                            <img 
                                className="image"
                                src={p.photofilename}
                                alt="uploaded"
                                onLoad={handleImageLoad}
                    
                            />
                        <div className="favorite-overlay">
                        <button 
                            className="favourite-btn" 
                            onClick={() => handleUpvote(p.photofilename)}>❤️ {p.count}
                        </button>
                      </div>
                    </div>
            </motion.div>
                ))}
            </div>

            <AnimatePresence>
    {showHeart && (
        <motion.div
            key="heart"
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 0, y: -300 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            style={{
                position: 'fixed',
                bottom: '80px',
                left: '50%',
                fontSize: '200px',
                pointerEvents: 'none',
                zIndex: 999
            }}
        >
            ❤️
        </motion.div>
    )}
</AnimatePresence>
           
            <Footer />
            </>
    )
}

export default Gallery;