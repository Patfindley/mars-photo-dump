export const getDate = () => {
  const current = new Date()
  const dateFormat = []
  dateFormat.push(current.toLocaleDateString("en-US", { year: 'numeric' }));
  current.toLocaleDateString("en-US", { month: 'numeric' }) > 10 ? 
  dateFormat.push(current.toLocaleDateString("en-US", { month: 'numeric' })) :
  dateFormat.push(0 + current.toLocaleDateString("en-US", { month: 'numeric' }));
  dateFormat.push(current.toLocaleDateString("en-US", { day: 'numeric' }));
  return dateFormat
}

export const getRecentPhotos = (date) => {
  return fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&api_key=${process.env.REACT_APP_API_KEY}`)
}
