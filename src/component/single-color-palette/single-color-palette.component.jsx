import React from 'react';
import {Link} from 'react-router-dom';
import {withStyles} from '@material-ui/styles';

import styles from './single-color-palette.styles';

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
		const {classes} = this.props;
		const colorBoxes = this._shades.map(color =>
			<ColorBox 
				key={color.name} 
				name={color.name} 
				background={color[format]} 
				showFullPalette={false}
			/>	
		)
		return (
			<div className={classes.palette}>
				<Navbar 
					handleChange={this.changeFormat} 
					showingAllColors={false}
				/>
				<div className={classes.paletteColor} >
					{colorBoxes}
					<div className={classes.goBack} >
						<Link to={`/palette/${id}`} >GO BACK!</Link>
					</div>
				</div>
				<PaletteFooter paletteName={paletteName} emoji={emoji} />
			</div>
		)
	}
}

export default withStyles(styles)(SingleColorPalette);