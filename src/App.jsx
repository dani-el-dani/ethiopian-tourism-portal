import Home from "./components/Home"
import Destinations from "./components/Destinations"
import DestinationsDetail from "./components/DestinationsDetail"
import Events from "./components/Events"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"



function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home />} /> 
          <Route path="/destinations" element={<Destinations /> } />
          <Route path="/destinations/:name" element={<DestinationsDetail />} />
          <Route path="/events" element={<Events /> } />
        </Route>
        
      </Routes>
      
    </BrowserRouter>
      
    </>
  )
}

export default App
