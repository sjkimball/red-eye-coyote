import React from 'react'

import "./astronaut.css"

const Astronaut = ({imageAsset, imageType}) => {
	return(
		<svg 
			id="astronaut"
			viewBox={`0 0 320 520`}
			>
			<defs>
				<mask
					id="messageMask"
					maskUnits="objectBoundingBox"
					maskContentUnits="userSpaceOnUse"
					>
					<rect
						width="100%"
						height="100%"
						fill="white"
						/>
					<text
						className="maskLetter"
						x="50%"
						y="50%"
						fill="black"
						>B</text>
					{/* <text className="maskLetter" x="50%" y="50%" fill="black">L</text> */}
					{/* <text className="maskLetter" x="50%" y="50%" fill="black">M</text> */}
				</mask>
				<filter
					id="colorFilter"
					filterUnits="objectBoundingBox"
					filterContentUnits="objectBoundingBox"
					>
					<feFlood
						result="floodFill"
						flood-color="#EBF222"
						flood-opacity="1"
						/>
					<feBlend
						in="SourceGraphic"
						in2="floodFill"
						mode="multiply"
						/>
				</filter>
			</defs>
			<image
				href="https://cdn.sanity.io/images/slrn1bhr/production/e9a8811db4545badd77ec6831d0bb2dc169020f7-1406x1406.jpg"
				height="520"
				width="520"
				x="-100"
				/>
			<image
				id="colorImage"
				href="https://cdn.sanity.io/images/slrn1bhr/production/e9a8811db4545badd77ec6831d0bb2dc169020f7-1406x1406.jpg"
				height="520"
				width="520"
				x="-100"
				>
					<title>Hey. I'm Sam.</title>
				</image>
				<foreignObject x="5%" y="70%" height="25%" width="50%">
					<div class="headline">
						<h2>Hey<span class="headline__heading--yellow">.</span><br/>I'm Sam<span class="headline__heading--yellow">.</span></h2>
						<ul class="headline__titles">
							<li>UX/UI Designer</li>
							<li>Front End Dev</li>
							<li>Graphic Artist</li>						
						</ul>
					</div>
				</foreignObject>
		</svg>
	);
}
export default Astronaut;
