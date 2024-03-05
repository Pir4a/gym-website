import { Route, Routes } from "react-router-dom"
import "./App.css"
import Navbar from "./Components/Navbar"
import Home from "./Pages/Home"

import Footer from "./Components/Footer"
import AboutPage from "./Pages/AboutPage"
import Galery from "./Pages/Galery"
import Schedule from "./Pages/Schedule"
import BlogPage from "./Pages/BlogPage"
import PricingPage from "./Pages/PricingPage"
import ClassesPage from "./Pages/ClassesPage"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/gallery" element={<Galery />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/classes" element={<ClassesPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
