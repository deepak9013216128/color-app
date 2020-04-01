import React from 'react';
import {Link} from 'react-router-dom';

import ColorBox from '../color-box/color-box.component';
import Navbar from '../navbar/navbar.component';
import PaletteFooter from '../palette-footer/palette-footer.component';

class SingleColorPalette extends React.Component {
	constructor(props){
		super(props);
		this._shades = this.gatherShades(this.props.palette.colors,this.props.colorId)
		this.state = {
			format: 'hex'
		}
	}
	gatherShades = (colors,colorFilterBy) => {
		let shades = [];
		for(let key in colors){
			shades = [
				...shades,
				...(colors[key].filter(color => color.id === colorFilterBy))
			]
		}
		return shades.slice(1);
	}
	changeFormat = (format) =>{
		this.setState({format})
	}
	render(){
		const {format} = this.state;
		const {paletteName,emoji,id} = this.props.palette;
		const colorBoxes = this._shades.map(color =>
			<ColorBox 
				key={color.name} 
				name={color.name} 
				background={color[format]} 
				showFullPalette={false}
			/>	
		)
		return (
			<div className='single-color-palette palette'>
				<Navbar 
					handleChange={this.changeFormat} 
					showingAllColors={false}
				/>
				<div className='palette-color' >
					{colorBoxes}
					<div className='color-box go-back' >
						<Link to={`/palette/${id}`} className='back-button'>GO BACK!</Link>
					</div>
				</div>
				<PaletteFooter paletteName={paletteName} emoji={emoji} />
			</div>
		)
	}
}

export default SingleColorPalette;