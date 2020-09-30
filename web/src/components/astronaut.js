import React from 'react'

import "./astronaut.css"

class Astronaut extends React.Component {
	constructor(props){
		super();
		this.state = {
			windowHeight: 0,
			windowWidth: 0
		}
	}
	componentDidMount() {
		this.setState({
			windowHeight: window.innerHeight - 48,
			windowWidth: window.innerWidth
		})
	}
	render() {
		const { windowHeight, windowWidth } = this.state;
		const viewBox = `0 0 ${windowWidth} ${windowHeight}`
		const offset = (windowHeight - windowWidth) / 2;
		return(
			<svg 
				id="astronaut"
				viewBox={viewBox}
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
						>
						<feFlood
							result="floodFill"
							floodColor="#EBF222"
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
					href="https://cdn.sanity.io/images/slrn1bhr/production/e9a8811db4545badd77ec6831d0bb2dc169020f7-1406x1406.jpg"
					height={windowHeight}
					width={windowHeight}
					x={`-${offset}`}
					/>
				<image
					id="colorImage"
					href="https://cdn.sanity.io/images/slrn1bhr/production/e9a8811db4545badd77ec6831d0bb2dc169020f7-1406x1406.jpg"
					height={windowHeight}
					width={windowHeight}
					x={`-${offset}`}
					>
						<title>Hey. I'm Sam.</title>
					</image>
					<foreignObject x="5%" y="70%" height="25%" width="50%">
						<div className="headline">
							<h2>Hey<span className="headline__heading--yellow">.</span><br/>I'm Sam<span className="headline__heading--yellow">.</span></h2>
							<ul className="headline__titles">
								<li>UX/UI Designer</li>
								<li>Front End Dev</li>
								<li>Graphic Artist</li>						
							</ul>
						</div>
					</foreignObject>
			</svg>
		);
	}
}
export default Astronaut;
