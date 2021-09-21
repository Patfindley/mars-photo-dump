import { useEffect, useState } from 'react';
import { Router, Route, Switch } from "react-router";
import { getDate, getRecentPhotos } from '../../Util'
import Photos from '../Photos/Photos.js'
import Nav from '../Nav/Nav.js'
import './App.css';

function App() {
  const [marsPhotos, setMarsPhotos] = useState([])
  const [currentDay, setCurrentDay] = useState(getDate())
  const [error, setError] = useState()

useEffect(() => {
  storeMostRecentPhotos()
}, [])

const storeMostRecentPhotos = async () => {
  try {
    const response = await getRecentPhotos(currentDay.join('-'))
    const data = await response.json()
    setMarsPhotos(data.photos)
  } catch (error) {
    setError(error.message)
  }
  if (!marsPhotos.length) {
    const previousDay = `${currentDay[2] - 1}`
    setCurrentDay(currentDay[2] = previousDay)
    try {
      const response = await getRecentPhotos(currentDay.join('-'))
      const data = await response.json()
      setMarsPhotos(data.photos)
    } catch (error) {
      setError(error.message)
    }
  }
}
  
  return (
    <div className="App">
      <Nav/>
      <Switch>
        <Route exact path ='/'
          render={() => (
            <Photos
              marsPhotos={marsPhotos}
              error={error}
            />
          )} />
      </Switch>
    </div>
  );
}

export default App;
