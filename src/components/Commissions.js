import React from 'react'
import concrete from '../images/beton.jpg'

const Commissions = () => {
	return (
		<div className='bg-auto h-screen flex flex-col items-center'>
			<img src={concrete} alt="concrete wall" className="absolute object-cover w-full h-full" />
			<h1 className="relative lg:text-5xl md:text-3xl sm:text-3xl text-2xl font-semi-bold mb-10 pt-10 font-mono">
				Commissions
			</h1>
		</div>
	)
}

export default Commissions
