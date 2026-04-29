import { useState } from 'react'

const galleryItems = [
  { id: 1, src: '/images/main.png', title: 'Seoul Miniature' },
  { id: 2, src: '/images/photo1.png', title: 'My Photo 01' },
  { id: 3, src: '/images/photo2.png', title: 'My Photo 02' },
  { id: 4, src: '/images/photo3.png', title: 'My Photo 03' },
  { id: 5, src: '/images/photo4.png', title: 'My Photo 04' },
  { id: 6, src: '/images/photo5.png', title: 'My Photo 05' },
]

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <main className="gallery-page">
      <section className="gallery-hero">
        <h2>Gallery</h2>
        <p>사진과 영상을 모아두는 나만의 아카이브</p>
      </section>

      <section className="insta-grid">
        {galleryItems.map((item) => (
          <button
            className="insta-card"
            key={item.id}
            onClick={() => setSelectedImage(item)}
          >
            <img src={item.src} alt={item.title} />
            <div className="insta-hover">
              <span>♡</span>
              <strong>{item.title}</strong>
            </div>
          </button>
        ))}
      </section>

      {selectedImage && (
        <div className="modal" onClick={() => setSelectedImage(null)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedImage(null)}>
              ×
            </button>
            <img src={selectedImage.src} alt={selectedImage.title} />
            <h3>{selectedImage.title}</h3>
          </div>
        </div>
      )}
    </main>
  )
}

export default Gallery