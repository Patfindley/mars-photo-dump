import './Photos.css'
import heartBorder from '../../assets/heart_border_icon.svg'
import heartFill from '../../assets/heart_fill_icon.svg'

const Photos = ({ marsPhotos, error }) => {
  console.log(marsPhotos, 'photos.js')

  const displayPhotos = () => {
    if (marsPhotos?.length) {
      return marsPhotos.map((photo, index) => {
        return (
          <div className={`photo-wrap`} key={photo.id}>
            <img className='heart-border' src={heartBorder} />
            <img className='heart-fill' src={heartFill} />
            <img className='photo photo-${index}' src={photo.img_src} alt={`${photo.rover.name} ${photo.camera.full_name}`}/>
            <div className='photo-details' >
              <h5 className='taken-on'>taken: {photo.earth_date}</h5>
              {/* <h3 className='rover-name'>taken by: {photo.rover.name}</h3> */}
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