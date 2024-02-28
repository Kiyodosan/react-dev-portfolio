import { useState } from 'react'
import reactLogo from './assets//images/react.svg'
import viteLogo from '/vite.svg'
import './assets/css/App.css'
// import './App.css'

import Header from './components/Header'
import Footer from './components/Footer'

import About_Me from './components/pages/About_Me'
import Portfolio from './components/pages/Portfolio'
import Contact from './components/pages/Contact'
import Resume from './components/pages/Resume'

//// figure out how to render different pages depending on nav link pressed
function App() {
  return (
    <>
      <Header />
      <About_Me />
    </>
  )
}

export default App;