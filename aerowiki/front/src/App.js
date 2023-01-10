import React from 'react'
import { Navigate, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Comercial from './pages/Comercial/Comercial'
import Marketing from './pages/Marketing/Marketing'
import Relacoes from './pages/Relacoes/Relacoes'
import PesqDes from './pages/PesqDes/PesqDes'
import Operacoes from './pages/Operacoes/Operacoes'
import Segmentos from './pages/Segmentos/Segmentos'
import Presidencia from './pages/Presidencia/Presidencia'
import Membros from './pages/Membros/Membros'
import Login from './pages/Login/Login'
import Account from './pages/Account/Account'


function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/comercial" element={<Comercial />} />
        <Route path="/marketing" element={<Marketing />} />
        <Route path="/relacoes" element={<Relacoes />} />
        <Route path="/ped" element={<PesqDes />} />
        <Route path="/operacoes" element={<Operacoes />} />
        <Route path="/segmentos" element={<Segmentos />} />
        <Route path="/presidencia" element={<Presidencia />} />
        <Route path="/membros" element={<Membros />} />
        <Route path="/myAccount" element={<Account />} />
        <Route path="*" element={<Navigate to="/login" />} />

      </Routes>
    </>

  )
}

export default App
