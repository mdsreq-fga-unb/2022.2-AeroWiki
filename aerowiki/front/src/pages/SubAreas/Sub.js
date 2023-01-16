import './Sub.css'
import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import testedetoken from '../../testes/testedetoken'

function Sub() {
  testedetoken()
  return (
    <>
    <header>
        <Header/>
    </header>
    
    <div id='web-body'>
      <main>
        <div className='area-page pad-box'>
          <div className='title'>
            <div className='hr no-marg'></div>
            <span>PROJETOS</span>
            <div className='hr no-marg'></div>
          </div>
        </div>
      </main>

    </div>

    <footer>
        <Footer/>
    </footer>
    </>
  
  )
}

export default Sub