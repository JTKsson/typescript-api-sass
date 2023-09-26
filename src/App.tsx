import './App.scss'
import Header from './components/Header'
import Footer from './components/Footer'
import Games from './components/SteamGames'

function App() {

  return (
    <div className='bodyContainer'>
    <Header />
    <Games/>
    <Footer/>
    </div>
  )
}

export default App
