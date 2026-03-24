import React from 'react'
import '../css/gallery.css'

function gallery() {
    return (
        <>

            <div>gallery</div>
            <div className='wrapper'>
                <div className='menu'>
                    <button><div className='gallery'> 🏠 </div></button>
                    <button><div className='favorites'> ❤️</div></button>
                    <button><div className='profile'>👤</div></button>
                    <button><div className='uploag'>⬆️</div></button>
                </div>
            </div>

        </>
    )
}

export default gallery