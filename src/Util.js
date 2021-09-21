export const getDate = () => {
  const today = new Date()
  const dateFormat = []
  dateFormat.push(today.toLocaleDateString("en-US", { year: 'numeric' }));
  today.toLocaleDateString("en-US", { month: 'numeric' }) > 10 ? 
  dateFormat.push(today.toLocaleDateString("en-US", { month: 'numeric' })) :
  dateFormat.push(0 + today.toLocaleDateString("en-US", { month: 'numeric' }));
  dateFormat.push(today.toLocaleDateString("en-US", { day: 'numeric' }));
  return dateFormat
}

export const getRecentPhotos = (date) => {
  return fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&api_key=bN55pfI5h9jyuoXRcgkbvmK1mic9qD9je9xa40Ly`)
}