import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Podcasts from './components/Podcasts'
import './styles/main.scss';


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Podcasts />
    </div>
  )
}

export default App
