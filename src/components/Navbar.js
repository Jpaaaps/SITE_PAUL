import React from 'react'
import { Link } from 'react-router-dom'

function Navbar({toggle}) {
  return (

    <nav className='bg-gradient-to-b from-gris to-gray-100 flex justify-between items-center h-20 bg-gray-100 text-black relative font-mono border-b-2 border-black' role='navigation'>
      <Link to='/' className='pl-8'>
        Paul-Antoine Goutal
      </Link>
      <div className='px-4 cursor-pointer md:hidden' onClick={toggle}>
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
      </div>
      <div className="pr-8 md:block hidden">
        <Link className="menu-hover" to='/personnal'>Personal</Link>
        <Link className="menu-hover" to='/commissions'>Commissions</Link>
        <Link className="menu-hover" to='/contact'>Contact</Link>
      </div>
    </nav>

  )
}

export default Navbar
