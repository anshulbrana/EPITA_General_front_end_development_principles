import React, { Component } from 'react'
import Greetings from './components/Greetings'
import Photos from './components/Photos'
import Home from './pages/Home'
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom"
import Api from './pages/Api'

import "./styles/main.css"


function App() {
  return (<>

<BrowserRouter>
        <div id ="nav">

          <Link to = "/">Home</Link>
            <Link to = "/Api">API</Link>


        </div>
            <Routes>
                {/* <Route path = "/" element = {<Greeting firstName = "Anshul Bikram" lastName = "Rana"/>}/> */}
                <Route path="/" element={<Home />} />
                <Route path="/Api" element={<Api />} />
            </Routes>
        </BrowserRouter>
    {/* If there is oprional value in Greetings then its not mandatory to pass the values */}
    {/* <Greetings firstName={"Anshul Bikram"} lastName={"Rana"} age={20} /> */}
    {/* <Photos/> */}
    </>)
    
}

export default App