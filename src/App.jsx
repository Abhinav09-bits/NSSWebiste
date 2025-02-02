import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Events from "./components/Events"
import Volunteers from "./components/Volunteers"
import Contact from "./components/Contact"

function App() {
  return (
    <Router>
      <div className="bg-gray-100 min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/volunteer" element={<Volunteers />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

