import { useEffect, useState } from 'react';

import './App.css';
import { getDate, getRecentPhotos } from '../../Util'

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
  console.log(marsPhotos)
}
  
  return (
    <div className="App">
      <h1> today is {getDate().join('-')} </h1>
    </div>
  );
}

export default App;
