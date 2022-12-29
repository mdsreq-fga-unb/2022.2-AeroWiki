import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Comercial from './pages/Comercial/Comercial'
import Marketing from './pages/Marketing/Marketing'
import Relacoes from './pages/Relacoes/Relacoes'
import PesqDes from './pages/PesqDes/PesqDes'
import Operacoes from './pages/Operacoes/Operacoes'
import Segmentos from './pages/Segmentos/Segmentos'
import Presidencia from './pages/Presidencia/Presidencia'

function App() {
  return (
    <> 
    <Routes>
      <Route path="/home" element = { <Home /> }></Route>
      <Route path="/comercial" element = { <Comercial /> }></Route>
      <Route path="/marketing" element = { <Marketing /> }></Route>
      <Route path="/relacoes" element = { <Relacoes /> }></Route>
      <Route path="/ped" element = { <PesqDes /> }></Route>
      <Route path="/operacoes" element = { <Operacoes /> }></Route>
      <Route path="/segmentos" element = { <Segmentos /> }></Route>
      <Route path="/presidencia" element = { <Presidencia /> }></Route>
    </Routes>
    </>

  )
}

export default App
