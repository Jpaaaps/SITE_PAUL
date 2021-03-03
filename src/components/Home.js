import React from 'react'
import { Link } from 'react-router-dom'

import concrete from '../images/beton.jpg'

const Home = () => {
	return (
		<div className='relative h-screen flex flex-col justify-center items-center'>
			<img src={concrete} alt="concrete wall" className="absolute object-cover w-full h-full" />
			<h1 className="relative lg:text-9xl md:text-7xl sm:text-5xl text-3xl font-bold mb-14 font-mono lg:mx-40 md:mx-10 sm:mx-20">
				Paul Antoine GOUTAL
				<p className="text-xl mb-2 ml-2 font-thin">Independant photographer</p>
			</h1>
			<Link to='/personnal'>
				<button type="button" class="relative px-6 py-4 border-4 border-gray-600 bg-gray-100 opacity-50 hover:bg-black hover:opacity-100 hover:border-white rounded-lg text-2xl hover:text-white tracking-wide focus:outline-none">
					Wanna see my work
				</button>
			</Link>
		</div>
	)
}

export default Home
