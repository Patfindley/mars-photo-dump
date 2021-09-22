import { useEffect, useState } from 'react';
import { Route, Switch } from "react-router";
import { getPhotosForDay, getRecentPhotos } from '../../Util'
import Photos from '../Photos/Photos.js'
import Nav from '../Nav/Nav.js'
import './App.css';

function App() {
  const [currentDay] = useState(new Date())
  const [marsPhotos, setMarsPhotos] = useState([])
  const [likedPhotos, setLikedPhotos] = useState([])
  const [error, setError] = useState()

useEffect(() => {
  storeMostRecentPhotos()
}, [])

const storeMostRecentPhotos = async () => {
  try {
    const response = await getPhotosForDay(currentDay)
    const data = await response.json()
    setMarsPhotos(data.photos)
    console.log(marsPhotos, 'photos')
  } catch (error) {
    setError(error.message)
  }
  if (marsPhotos.length < 40) {
    try {
      const response = await getRecentPhotos(currentDay)
      const data = await response.json()
      setMarsPhotos(...marsPhotos, data.photos)
    } catch (error) {
      setError(error.message)
    }
  }
}

const likePhoto = (event) => {
  const target = event.target.closest('div').id
  const targetInfo = marsPhotos.find(photo => photo.id === Number(target))
  if (!targetInfo.isLiked) {
    targetInfo.isLiked = true
    setLikedPhotos([...likedPhotos, targetInfo])
  } else {
    targetInfo.isLiked = false
    const removeTarget = likedPhotos.filter(photo => photo.id !== Number(target))
    setLikedPhotos(removeTarget)
  }
  }
  
  return (
    <div className="App">
      <Nav liked={likedPhotos.length}/>
      <Switch>
        <Route exact path ='/'
          render={() => (
            <Photos
              marsPhotos={marsPhotos}
              likePhoto={likePhoto}
              error={error}/> 
          )} />
          <Route exact path ='/liked'
          render={() => (
            <Photos
              marsPhotos={likedPhotos}
              likePhoto={likePhoto}
              error={error}/>
          )} />
      </Switch>
    </div>
  );
}

export default App;
