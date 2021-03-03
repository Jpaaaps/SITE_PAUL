import React from 'react'
import { Link } from 'react-router-dom'

const Dropdown = ({ isOpen, toggle }) => {

	return (

		<div className={isOpen ? 'grid grid-rows-3 text-center items-center bg-white' : 'hidden'} onClick={toggle} >
			<Link className="drop-hover border-b-2" to='/personnal'>
				Personal
			</Link>
			<Link className="drop-hover border-b-2" to='/commissions'>
				Commissions
			</Link>
			<Link className="drop-hover" to='/contact'>
				Contact
			</Link>
		</div>

	)
}

export default Dropdown
