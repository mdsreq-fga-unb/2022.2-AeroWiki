import React from 'react'
import './Footer.css'
import LogoVertical from '../../img/logovertical.svg'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'

function Footer() {
  return (
    <footer id='footer'>
      <main>
        <div className="pad-box">
          
          <div className='logo footer'>
            <img src={LogoVertical} alt='logo'></img>
          </div>

          <div id='footer-text'>
            <span>ZENIT AEROSPACE, ÁREA ESPECIAL DE INDÚSTRIA. PROJEÇÃO A, UNB - DF - 480 GAMA LESTE BRASÍLIA DF 72444-240, DISTRITO FEDERAL, BRAZIL</span>
            <span>© 2022 by Zenit Aerospace. All Rights Reserved.</span>
          </div>
          </div>
        
      </main>
    </footer>
  )
}

export default Footer
