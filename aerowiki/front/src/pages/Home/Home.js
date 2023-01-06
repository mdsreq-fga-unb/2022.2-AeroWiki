import './Home.css'
import Header from '../../components/Header/Header'
import ZenitPoster from '../../components/ZenitPoster/ZenitPoster'
import Calendar from '../../components/Calendar/Calendar'
import FixedProjects from '../../components/FixedProjects/FixedProjects'
import Footer from '../../components/Footer/Footer'

function Home() {
  return (
    <div id='app'>
      <header>
         <Header></Header>
      </header>
     
      <div id='web-body'>
        <ZenitPoster></ZenitPoster>
        <main>
          <Calendar></Calendar>
          <FixedProjects></FixedProjects>
        </main>
      </div>

      <footer>
        <Footer></Footer>
      </footer>
    </div>
  )
}

export default Home
