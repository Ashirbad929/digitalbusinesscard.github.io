import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Info from './Info'
import About from './About'
import Intrests from './Intrests'
import Sociallinks from './Sociallinks'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <small>card929</small>
    <div className="App">
      
      <header>
      <Info/>
      </header>
      <main>
      <About/>
      <Intrests/>
      </main>
     
       <footer >
        <Sociallinks />

       </footer>
    </div>
    </div>
  )
}

export default App
