import React from 'react'
import './Footer.css'
import LogoVertical from '../../img/logovertical.svg'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'

function Footer() {
  return (
    <footer id='footer'>
      <div className='Body'>
        <Row>
          <Col xxl={3}>
            <img className='logoFooter' src={LogoVertical} alt='logo'></img>
          </Col>
        </Row>
        <Row className='justify-content-center'>
          <Col xxl={6}>
            <span className='textofooter footermargin'>ZENIT AEROSPACE, ÁREA ESPECIAL DE INDÚSTRIA. PROJEÇÃO A, UNB - DF - 480 GAMA LESTE BRASÍLIA DF 72444-240, DISTRITO FEDERAL, BRAZIL</span>
          </Col>
        </Row>
        <Row className='justify-content-center'>
          <Col xxl={6}>
            <div className='marginfooter'>
              <span className='textofooter'>© 2022 by Zenit Aerospace. All Rights Reserved.</span>
            </div>
          </Col>
        </Row>
      </div>
    </footer>
  )
}

export default Footer
