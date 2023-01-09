import Header from '../../components/Header/Header'
import CardAccount from '../../components/CardAccount/CardAccount'
import Footer from '../../components/Footer/Footer'

function Account() {
    return (
      <>
      <header>
        <Header></Header>
      </header>
      
      <div id='web-body'>
        <CardAccount></CardAccount>
      </div>
      
      <footer>
        <Footer></Footer>
      </footer>
      
      </>
    )
  }
  
  export default Account