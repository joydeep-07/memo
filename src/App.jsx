import React from 'react'
import Letter from './components/Letter'
import Navbar from './components/Navbar'
import Crousel from './components/Crousel'
import Propose from './components/Propose'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Letter/>
      {/* <Propose/> */}
      <Crousel/>
    </div>
  )
}

export default App