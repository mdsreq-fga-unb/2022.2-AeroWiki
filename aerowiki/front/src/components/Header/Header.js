import './Header.css'
import LogoHorizontal from '../../img/logohorizontal.png'
import {BrowserRouter as Router} from 'react-router-dom';
import Navbar from '../Navbar/Navbar'
import UserMenu from '../UserMenu/UserMenu'

function Header(){
    return(
      <>
        <div id='mainheader'>
          <main>
            <div id='pad-box'>
              <div id='logo'>
                <img src={LogoHorizontal} alt='logo'></img>
              </div>

              <div id='user'>
                <UserMenu></UserMenu>
              </div>  
            </div>
          </main>
        </div>

        <div id='subheader'>
          <main>
            <Navbar></Navbar>
          </main>
        </div>
      </>
    )
  }

  export default Header