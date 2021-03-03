import React from 'react'
import concrete from '../images/beton.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMobileAlt } from '@fortawesome/free-solid-svg-icons'
import { faInstagramSquare,faLinkedin,faTumblrSquare } from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
	return (

		<div className='relative flex flex-col items-center h-screen'>

			<img src={concrete} alt="concrete wall" className="absolute object-cover w-screen h-full" />
			<h1 className="relative lg:text-5xl md:text-3xl sm:text-3xl text-2xl font-semi-bold mb-6 pt-14 font-mono">
				How to Contact me
			</h1>

			<div className="relative md:flex justify-center items-center md:px-32 leading-loose">
				<p className="lg:text-3xl md:text-xl sm:text-xl text-base font-light text-justify px-14 py-8 my-4 mx-auto tracking-wide font-mono">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
					molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
					numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
					optio, eaque rerum! Provident similique accusantium nemo autem.
				</p>
			</div>

			<a className="relative lg:text-3xl md:text-xl sm:text-xl tracking-wide text-base font-light mt-6 mb-10 hover:text-griis" href="mailto:paul.antoine.goutal@gmail.com">
				<FontAwesomeIcon className='mr-4' icon={faEnvelope} size='2x'/>
				paul.antoine.goutal@gmail.com
			</a>
			<a className="relative lg:text-3xl md:text-xl sm:text-xl tracking-wide text-base hover:text-griis" href="tel:0608888717">
				<FontAwesomeIcon className='mr-4' icon={faMobileAlt} size='2x' />
				06.08.88.87.17
			</a>

			<div className="relative flex mb-20">

				<a className='pt-20 mr-8 hover:text-gris' href='https://www.instagram.com/paulantoine/' target='_blank' rel="noopener noreferrer">
					<FontAwesomeIcon icon={faInstagramSquare} size="3x" />
				</a>
				<a className='pt-20 mr-8 hover:text-griis' href='https://www.linkedin.com/in/paul-antoine-74953a11/' target='_blank' rel="noopener noreferrer">
					<FontAwesomeIcon icon={faLinkedin} size="3x" />
				</a>
				<a className='pt-20 mr-8 hover:text-gray-600' href='https://paulantoine.tumblr.com/' target='_blank' rel="noopener noreferrer">
					<FontAwesomeIcon icon={faTumblrSquare} size="3x" />
				</a>
				
			</div>

		</div>
	)
}

export default Contact
