import React, { useEffect, useState } from 'react'



const Photos = () => {
    // let photos: string[]
    const [photos, setPhotos] = useState([])

    useEffect(() =>{
      const getData = async () => {
          const res = await fetch('https://jsonplaceholder.typicode.com/photos')
          const json = await res.json()
          setPhotos(json)
          console.log(json.title)

      }

      getData()
  }, [])

  // photos = photos.map(item => Object.values(item));



  return (<>
    <div>Photos</div>
    <ul>
        { photos.map( (photo, index) =>
        <li key={`photo-${index}`}>
            {photo.title}
        </li>)}
    </ul>
  </>)
}


export default Photos