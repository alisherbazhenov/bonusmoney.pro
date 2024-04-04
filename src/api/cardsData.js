export const apiFetch = () => {
  fetch('https://schema.getpostman.com/json/collection/v2.0.0/collection.json')
    .then(res => res.json())
    .then(data => console.log(data))

  console.log('first')
}

// const data = async () => {
//   const res = await fetch('https://skypro-music-api.skyeng.tech/catalog/selection/')
//   const data = await res.json()
//   setSelection(data)
// }
