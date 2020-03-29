import React from 'react';

import './palette.styles.css';

import Navbar from '../navbar/navbar.component';
import ColorBox from '../color-box/color-box.component';

class Palatte extends React.Component {
	
	constructor(props) {
		super(props)
		this.state = {
			level:500
		}
	}
	changeLevel = (level) =>{
		this.setState({level})
	}
	render(){
		const {colors} = this.props.palette;
		const {level} = this.state;
		const colorsBoxes = colors[level].map(color => 
				<ColorBox name={color.name} background={color.hex} />
			)
		return (
			<div className='palette'>
				<Navbar level={level} changeLevel={this.changeLevel}/>
				<div className='palette-color'>{colorsBoxes}</div>
			</div>
		)
	}
}	

export default Palatte;