import { BrowserRouter, Route, Routes } from "react-router"
import Listing from './pages/Listing'


function App() {

  return (
    <BrowserRouter>
    {/* <Navbar /> */}
    <Routes>
      <Route path="/listing/:listingId" element={<Listing/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
