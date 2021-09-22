import { useEffect, useState } from 'react';
import { Router, Route, Switch } from "react-router";
import {  getDateString, getPhotosForDay, getPreviousDate } from '../../Util'
import Photos from '../Photos/Photos.js'
import Nav from '../Nav/Nav.js'
import './App.css';

function App() {
  const [currentDay, setCurrentDay] = useState(new Date())
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
  } catch (error) {
    setError(error.message)
  }
  // if (!marsPhotos.length) {
  //   const previousDay = getPreviousDate(currentDay); //`${currentDay[2] - 1}`
  //   setCurrentDay(currentDay[2] = previousDay)
  //   try {
  //     const response = await getPhotosForDay(currentDay.join('-'))
  //     const data = await response.json()
  //     setMarsPhotos(data.photos)
  //   } catch (error) {
  //     setError(error.message)
  //   }
  // }
  console.log(currentDay.getDate())
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
  console.log(targetInfo)
  console.log(likedPhotos, 'liked')
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
