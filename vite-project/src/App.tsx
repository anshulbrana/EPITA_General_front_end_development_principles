import React, { Component } from 'react'
import Greetings from './components/Greetings'
import Photos from './components/Photos'

function App() {
  return (<>
    <div>App</div>
    {/* If there is oprional value in Greetings then its not mandatory to pass the values */}
    <Greetings firstName={"Anshul Bikram"} lastName={"Rana"} age={20} />
    <Photos/>
    </>)
    
}

export default App