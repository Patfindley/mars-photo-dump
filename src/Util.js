
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
  // return date.getFullYear() + '-' + (date.getMonth() + 1 ) + '-' + date.getDay();

  return `${date.getFullYear()}-0${date.getMonth() + 1}-${date.getDate()}`
}


export const getPhotosForDay = (date) => {
  return fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${getDateString(date)}&api_key=${process.env.REACT_APP_API_KEY}`)
}
