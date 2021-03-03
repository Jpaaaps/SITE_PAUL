import React, { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import Commissions from './components/Commissions'
import Contact from './components/Contact'
import Dropdown from './components/Dropdown'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Personnal from './components/Personnal'

function App() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const hideMenu = () => {
      if(window.innerWidth > 768 && isOpen){
        setIsOpen(false)
      }
    }

    window.addEventListener('resize', hideMenu)

    return () => {
      window.removeEventListener('resize', hideMenu)
    }
  })

  return (
    <div>
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Switch>
        <Route component={Home} path='/' exact />
        <Route component={Commissions} path='/commissions' />
        <Route component={Personnal} path='/personnal' />
        <Route component={Contact} path='/contact' />
      </Switch>
      <Footer />
    </div>
  )
}

export default App;