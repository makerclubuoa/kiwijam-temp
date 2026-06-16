import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import HomePage from './components/HomePage.jsx'
import AboutPage from './components/AboutPage.jsx'
import CodeOfConductPage from './components/CodeOfConductPage.jsx'
import CodeOfConductFullPage from './components/CodeOfConductFullPage.jsx'
import FinePrintPage from './components/FinePrintPage.jsx'
import Footer from './components/Footer.jsx'
import './App.css'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-the-jam" element={<AboutPage />} />
          <Route path="/code-of-conduct" element={<CodeOfConductPage />} />
          <Route path="/code-of-conduct-full" element={<CodeOfConductFullPage />} />
          <Route path="/fine-print" element={<FinePrintPage />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}
