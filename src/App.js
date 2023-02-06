import './App.css'
import NavigationBar from './components/NavigationBar'
import Intro from './components/Intro'
import Trending from './components/Trending'
import Terbaru from './components/Tv'

import "./style/landingPage.css"
import Superhero from './components/Superhero'
import Tv from './components/Tv'

function App() {
  return (
    <div>
      {/* intro section start */}
      <div className='mybg'>
        <NavigationBar />
        <Intro />
      </div>
      {/* intro section end */}

      {/* trending section start */}
      <div className='trending'>
        <Trending />
      </div>
      {/* trending section end */}

      {/* Terbaru section start */}
      <div className='terbaru'>
        <Tv />
      </div>
      <div className='superhero'>
        <Superhero/>
      </div>
    </div>
  )
}

export default App
