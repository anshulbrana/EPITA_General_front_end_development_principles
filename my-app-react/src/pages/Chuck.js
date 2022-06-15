import React, { useEffect, useState } from 'react'

//rafce and press enter for shortcut


const Chuck = () => {
    
    const [joke, setJoke] = useState(null)

    useEffect(() =>{
        const getData = async () => {
            const res = await fetch('https://api.chucknorris.io/jokes/random')
            const json = await res.json()
            setJoke(json.value)
            console.log(json.value)

        }

        getData()
    }, [])
  return (
    <div>{joke}</div>
  )
}

export default Chuck