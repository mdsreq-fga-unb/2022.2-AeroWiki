import './Header.css'
import LogoHorizontal from '../../img/logohorizontal.png'
import Navbar from '../Navbar/Navbar'
import UserMenu from '../UserMenu/UserMenu'

function Header(){

    function replace(){
      window.location.replace("http://localhost:3000/home")
    }
    
    return(
      <>
        <div id='mainheader'>
          <main>
            <div className='pad-box'>
              <div className='logo'>
                <a className='logo' href={"/home"}><img src={LogoHorizontal} alt='logo'></img></a>
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