import './Members.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import MembersTable from '../../components/MembersTable/MembersTable'
import NewUserForm from '../../components/NewUserForm/NewUserForm'
import testedetoken from '../../testes/testedetoken'

function Members() {
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

        <main>
          <div className='pad-box'>
            <MembersTable></MembersTable>
          </div>
        </main>

      </div>

      <footer>
        <Footer></Footer>
      </footer>
    </div>
  )
}

export default Members
