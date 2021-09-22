const API_Key = process.env.REACT_APP_API_KEY

export const getDateString = (date) => {
  return `${date.getFullYear()}-0${date.getMonth() + 1}-${date.getDate()}`
}

export const getPhotosForDay = (date) => {
  return fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${getDateString(date)}&api_key=${API_Key}`)
}

export const getPreviousDate = (date, diff) => {
  const newDate = date;
  newDate.setDate(newDate.getDate() - diff)
  return newDate;
}

export const getRecentPhotos = (date) => {
  for (let i = 0; i < 10; i++) {
    const newDate = getPreviousDate(date, i);
    return getPhotosForDay(newDate)
  }
}


