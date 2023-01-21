import './Membros.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import MembersTable from '../../components/MembersTable/MembersTable'
import NewUserForm from '../../components/NewUserForm/NewUserForm'
import testedetoken from '../../testes/testedetoken'

function Membros() {
  // testedetoken()
  return (
    <div id='app'>
      <header>
          <Header></Header>
      </header>
      
      <div id='web-body'>
        <div id='main-title'>
          <span>Membros</span>
          <NewUserForm></NewUserForm>
        </div>
        
        <div id='member-table-container'>
            <main>
                <div className='pad-box'>
                    <MembersTable></MembersTable>
                </div>
            </main>
        </div>
        
      </div>

      <footer>
        <Footer></Footer>
      </footer>
    </div>
  )
}

export default Membros
