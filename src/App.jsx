import './App.css'
import {Onboarding_A} from './Pages/onboarding'
import {SignUp,Login} from './Pages/Login';
import Application from './Pages/Application'
import Home from '/src/Pages/Home'
import Explore from '/src/Pages/Explore'
import Me from '/src/Pages/Me'
import Error from '/src/Pages/Error';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {

  return (
    <>
     <Router>
      <Routes>
      <Route path="*" element={<Error/>} />
        <Route path="/" element={<Onboarding_A/>} />
        
        <Route path='/Login' element={<Login/>}/>
        <Route path='/SignUp' element={<SignUp/>}/>
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
