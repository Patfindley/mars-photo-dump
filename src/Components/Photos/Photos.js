import { useEffect, useState } from 'react';
import './Photos.css'
import heartBorder from '../../assets/heart_border_icon.svg'
import heartFill from '../../assets/heart_fill_icon.svg'

const Photos = ({ marsPhotos, likePhoto, error }) => {
  const [numOfPhotos, setNumOfPhotos] =useState(10)

  const loadMore = () => {
    console.log(numOfPhotos, 'before')
    setNumOfPhotos(numOfPhotos + 10)
    console.log(numOfPhotos, 'after')
  }

  const displayPhotos = (start, stop) => {
    const photoSet = marsPhotos.slice(start, stop)
    if (marsPhotos?.length) {
      return photoSet.map((photo, index) => {
        return (
          <div className={`photo-wrap`} key={photo.id} id={photo.id}>
            <img className={photo.isLiked? 'heart-fill' : 'hide'} src={heartFill} />
            <img className='heart-border' src={heartBorder} onClick={event => likePhoto(event)} />
            <img className='photo photo-${index}' src={photo.img_src} alt={`${photo.rover.name} ${photo.camera.full_name}`}/>
            <div className='photo-details' >
              <h5 className='taken-on'>taken: {photo.earth_date}</h5>
            </div>
          </div>
        )
      })
    }
  }
return (
  <main className='photos'>
    { marsPhotos.length > 0 ? displayPhotos(0, numOfPhotos) : <h3>{error}</h3> }
    <button className='load-more' onClick={() => loadMore()}>Load More</button>
  </main>
)
}

export default Photos;