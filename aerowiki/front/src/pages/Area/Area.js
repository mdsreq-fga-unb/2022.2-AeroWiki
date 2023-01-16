import './Area.css'
import React from 'react'
import SubAreas from '../../components/SubAreas/SubAreas'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import testedetoken from '../../testes/testedetoken'


function Marketing() {
  testedetoken()
  var areaName = window.location.href.split('/').pop()
  if (areaName === 'comercial'){
    areaName = 'COMERCIAL'
  }
  else if(areaName === 'marketing'){
    areaName = 'MARKETING'
  }
  else if(areaName === 'relacoes'){
    areaName = 'RELAÇÕES EXTERNAS'
  }
  else if(areaName === 'ped'){
    areaName = 'PESQUISA & DESENVOLVIMENTO'
  }
  else if(areaName === 'operacoes'){
    areaName = 'OPERAÇÕES'
  }
  else if(areaName === 'segmentos'){
    areaName = 'SEGMENTOS'
  }
  else if(areaName === 'presidencia'){
    areaName = 'PRESIDÊNCIA'
  }

  return (
    <>
      <header>
        <Header/>
      </header>

      <div id='web-body'>
        <main>
          <div className='area-page pad-box'>
            <div className='title area-name'>
              <div className='hr no-marg'></div>
              <span>{areaName}</span>
              <div className='hr no-marg'></div>
            </div>
          
            <SubAreas />
          </div>
   
        </main>
      </div>

      <footer>
        <Footer/>
      </footer>
    </>
  
  )
}

export default Marketing
