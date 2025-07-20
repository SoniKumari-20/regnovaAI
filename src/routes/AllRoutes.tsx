import Footer from '../common/footer/Footer'
import Header from '../common/header/Header'
import { Routes, Route } from "react-router-dom";
import Pricing from '../pages/pricing/Pricing'
import About from '../pages/about/About'
import Home from '../pages/home/Home'

export default function AllRoutes() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
      <Footer />
    </>
  )
}
