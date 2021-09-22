// export const getDate = () => {
//   const current = new Date()
//   const dateFormat = []
//   dateFormat.push(current.toLocaleDateString("en-US", { year: 'numeric' }));
//   current.toLocaleDateString("en-US", { month: 'numeric' }) > 10 ? 
//   dateFormat.push(current.toLocaleDateString("en-US", { month: 'numeric' })) :
//   dateFormat.push(0 + current.toLocaleDateString("en-US", { month: 'numeric' }));
//   dateFormat.push(current.toLocaleDateString("en-US", { day: 'numeric' }));
//   return dateFormat
// }

// export const getPreviousDate = (date, diff) => {
//   const newDate = date;
//   newDate.setDate(newDate.getDate() - diff)
//   return newDate;
// }

// export const getRecentPhotos = () => {
//   const originalDate = new Date();
//   const photos = [];
//   for(let i = 0; i < 10; i++) {
//     const date = getPreviousDate(originalDate, i);
//     photos.push(getPhotosForDay(date));
//   }
//   return photos;
// }

export const getDateString = (date) => {
  return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDay();
}


export const getPhotosForDay = (date) => {
  return fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${getDateString(date)}&api_key=${process.env.REACT_APP_API_KEY}`)
}
