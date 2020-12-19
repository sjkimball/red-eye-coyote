import React from 'react'

import "./astronaut.css"

const Astronaut = () => {
	return(
		<svg 
			id="astronaut"
			viewBox="0 0 100 100"
			preserveAspectRatio="xMidYMid slice"
			>
			<defs>
				<mask
					id="messageMask"
					>
					<rect
						className={`maskBackground`}
						/>
					<text id={`letterB`} className={`maskLetter`} x="50%" y="55%">B</text>
					<text id={`letterL`} className={`maskLetter`} x="50%" y="55%">L</text>
					<text id={`letterM`} className={`maskLetter`} x="50%" y="55%">M</text>
				</mask>
				<filter
					id="colorFilter"
					>
					<feFlood
						result="floodFill"
						floodColor="#F5DF4D"
						floodOpacity="1"
						/>
					<feBlend
						in="SourceGraphic"
						in2="floodFill"
						mode="multiply"
						/>
				</filter>
			</defs>
			<image
				className={`svgImages`}
				href="https://cdn.sanity.io/images/slrn1bhr/production/e9a8811db4545badd77ec6831d0bb2dc169020f7-1406x1406.jpg"
				/>
			<image
				id="colorImage"
				className={`svgImages`}
				href="https://cdn.sanity.io/images/slrn1bhr/production/e9a8811db4545badd77ec6831d0bb2dc169020f7-1406x1406.jpg"
				>
					<title>Hey. I'm Sam.</title>
			</image>
		</svg>
	);
}
export default Astronaut;
