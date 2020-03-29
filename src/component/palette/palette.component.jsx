import React from 'react';

import './palette.styles.css';

import Navbar from '../navbar/navbar.component';
import ColorBox from '../color-box/color-box.component';

class Palatte extends React.Component {
	
	constructor(props) {
		super(props)
		this.state = {
			level:500,
			format: 'hex'
		}
	}
	changeLevel = (level) =>{
		this.setState({level})
	}
	changeFormat = (format) =>{
		this.setState({format})
	}
	render(){
		const {colors,paletteName,emoji} = this.props.palette;
		const {level,format} = this.state;
		const colorsBoxes = colors[level].map(color => 
				<ColorBox name={color.name} background={color[format]} key={color.id} />
			)
		return (
			<div className='palette'>
				<Navbar 
					level={level} 
					changeLevel={this.changeLevel} 
					handleChange={this.changeFormat}
				/>
				<div className='palette-color'>{colorsBoxes}</div>
				<footer className='palette-footer'>
					{paletteName}
					<span className='emoji'>{emoji}</span>
				</footer>
			</div>
		)
	}
}	

export default Palatte;