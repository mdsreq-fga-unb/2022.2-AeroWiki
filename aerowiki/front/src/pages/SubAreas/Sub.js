import './Sub.css'
import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import testedetoken from '../../testes/testedetoken'

function Sub() {
  testedetoken()
  return (
    <div id='web-body'>
        <header>
            <Header/>
        </header>
      
        <div id='title'>
          <div id='hr'><hr></hr></div>
            <span >PROJETOS</span>
          <div id='hr'><hr></hr></div>
        </div>

      <body>
        
      </body>

        <footer>
            <Footer/>
        </footer>
    </div>
  
  )
}

export default Sub