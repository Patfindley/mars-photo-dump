import './Photos.css'

const Photos = ({ marsPhotos, error }) => {
  console.log(marsPhotos, 'photos.js')

  const displayPhotos = () => {
    if (marsPhotos?.length) {
      return marsPhotos.map((photo, index) => {
        return (
          <div className={`photo-wrap`} key={photo.id}>
            <img className='photo photo-${index}' src={photo.img_src} alt={`${photo.rover.name} ${photo.camera.full_name}`}/>
            <div className='photo-details' >
              <h3 className='rover-name'>taken by: {photo.rover.name}</h3>
            </div>
          </div>
        )
      })
    }
  }
return (
  <main className='photos'>
    { marsPhotos.length > 0 ? displayPhotos() : <h3>{error}</h3> }
  </main>
)
}

export default Photos;