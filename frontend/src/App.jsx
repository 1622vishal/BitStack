import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css"
import Home from './pages/Home';
import NoPage from './pages/NoPage';
import Signup from './pages/Signup';
import Login from './pages/login';
import CreateRoom from './pages/CreateRoom';

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signUp' element={<Signup />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/CreateRoom' element={<CreateRoom />} />
          <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App