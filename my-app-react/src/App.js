import Button from "./components/Button"
import Home from "./pages/Home"
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
} from "react-router-dom"
import Chuck from "./pages/Chuck"

const App = () => {
    return <>
        <h1>App</h1>
        {/* <Greeting firstName = "Anshul Bikram" lastName = "Rana" />
        <Button>Add</Button> */}

        <BrowserRouter>
        <div>
            <Link to = "/">Home</Link> <br/>
            <Link to = "/button">Button</Link><br/>
            <Link to = "/chuck">Chuck</Link>


        </div>
            <Routes>
                {/* <Route path = "/" element = {<Greeting firstName = "Anshul Bikram" lastName = "Rana"/>}/> */}
                <Route path="/" element={<Home />} />
                <Route path = "/button" element = {<Button />} />
                <Route path="/chuck" element={<Chuck />} />
            </Routes>
        </BrowserRouter>
    </>
}

export default App