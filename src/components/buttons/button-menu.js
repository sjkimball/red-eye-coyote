import React from 'react'
import MenuIcon from '../icons/menu-icon'

class ButtonMenu extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { onPress } = this.props;
		return (
			<button onClick={onPress}>
				<MenuIcon whichColor={this.props.menuVisible} />
			</button>
		);		
	}
}

export default ButtonMenu;
