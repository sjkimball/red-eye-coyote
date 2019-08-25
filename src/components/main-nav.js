import React from 'react';
import { Link } from 'gatsby'

const MainNav = () => {
	return (
		<nav>
			<ul>
				<Link to="/work"><li>Work</li></Link>
				<Link to="/about"><li>About</li></Link>
				<Link to="/blog"><li>Blog</li></Link>
				<Link to="/contact"><li>Contact</li></Link>
			</ul>
		</nav>
	);
}

export default MainNav;