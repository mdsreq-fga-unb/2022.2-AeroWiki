import React from 'react'
import { Navigate, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Members from './pages/Members/Members'
import Login from './pages/Login/Login'
import Account from './pages/Account/Account'
import Area from './pages/Area/Area'
import SubAreas from './pages/SubAreas/Sub'
import Project from './pages/Project/Project'


function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/comercial/*" element={<Area />} />
        <Route path="/marketing/*" element={<Area />} />
        <Route path="/relacoes/*" element={<Area />} />
        <Route path="/ped/*" element={<Area />} />
        <Route path="/operacoes/*" element={<Area />} />
        <Route path="/segmentos/*" element={<Area />} />
        <Route path="/presidencia/*" element={<Area />} />
        <Route path="/subareas/*" element={<SubAreas />} />
        <Route path="/membros" element={<Members />} />
        <Route path="/myAccount" element={<Account />} />
        <Route path='/projetoteste' element={<Project />} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </>

  )
}

export default App
