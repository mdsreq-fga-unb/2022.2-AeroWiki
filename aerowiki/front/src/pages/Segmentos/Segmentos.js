import React from 'react'
import SubAreas from '../../components/SubAreas/SubAreas'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import testedetoken from '../../testes/testedetoken'


function Segmentos() {
  testedetoken()
  return (
    <div id='web-body'>
      <header>
        <Header/>
      </header>
        
      <div className='Body' >
        <div id='title'>
          <div id='hr'><hr></hr></div>
            <span >SEGMENTOS</span>
          <div id='hr'><hr></hr></div>
        </div>
        
        <body>
          <SubAreas/>
        </body>
      </div>

      <footer>
        <Footer/>
      </footer>
    </div>
  
  )
}

export default Segmentos
