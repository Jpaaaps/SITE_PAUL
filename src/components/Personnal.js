import React, { useState, useEffect } from 'react'
import { Image } from 'cloudinary-react'

import concrete from '../images/beton.jpg'

const Personnal = () => {
	const [imageIds, setImageIds] = useState([])

	const loadImages = async () => {
		try {
			const res = await fetch("/api/images");
			const data = await res.json();
			console.log(data)
			setImageIds(data);
		} catch (err) {
			console.error(err);
		}
	};

	useEffect(() => {
		loadImages();
	}, []);

	return (
		<div className='bg-auto h-screen flex flex-col items-center'>
			<img src={concrete} alt="concrete wall" className="absolute object-cover w-full h-full" />
			<h1 className="relative lg:text-5xl md:text-3xl sm:text-3xl text-2xl font-semi-bold mb-10 pt-10 font-mono">
				Personal
			</h1>
			<div className="relative">
				{imageIds &&
					imageIds.map((imageId, index) => (
						<Image
							key={index}
							cloudName="photoblob"
							publicId={imageId}
							width="300"
							crop="scale"
						/>
					))}
			</div>
		</div>
	)
}

export default Personnal
