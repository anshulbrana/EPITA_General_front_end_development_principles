import React, { useEffect, useState } from 'react'

type Photo = {
  albumId: String,
  id: number,
  title: String,
  url: String,
  thumbnailUrl: String,

}

const Photos = () => {
    // let photos: string[]
    const [photos, setPhotos] = useState([])

    useEffect(() =>{
      const getData = async () => {
          const res = await fetch('https://jsonplaceholder.typicode.com/photos')
          const json = await res.json()
          setPhotos(json)
      }

      getData()
  }, [])

  // photos = photos.map(item => Object.values(item));

  return (<>
    <div>All titles from Photos</div>
    <ul>
        { photos.map( (photo: Photo, index) =>
        <li key={`photo-${index}`}>
            {photo.title}
        </li>)}
    </ul>
  </>)
}


export default Photos