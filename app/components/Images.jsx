'use client'
import React from 'react'

const Images = () => {
    useEffect(() => {
        let lightbox = new PhotoSwipeLightbox({
          gallery: '#' + props.galleryID,
          children: 'a',
          pswpModule: () => import('photoswipe'),
        });
        lightbox.init();
    
        return () => {
          lightbox.destroy();
          lightbox = null;
        };
      }, []);
  return (
    <div>
      
    </div>
  )
}

export default Images
