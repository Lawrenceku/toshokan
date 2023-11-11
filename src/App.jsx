import './App.css'
import Onboarding from './Pages/onboarding'
import Login from './Pages/Login';
import Application from './Pages/Application'
import Home from '/src/Pages/Home'
import Explore from '/src/Pages/Explore'
import Me from '/src/Pages/Me'
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {

  return (
    <>
     <Router>
      <Routes>
        <Route path='*' element={<Login/>}/>
        <Route path="/" element={<Onboarding/>} />
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Application' element={<Application/>}/>
        <Route path="/Home" element={<Home/>} />
        <Route path='/Explore' element={<Explore/>}/>
        <Route path='/Me' element={<Me/>}/>
      </Routes>
    </Router>
    
    </>
  )
}

export default App
