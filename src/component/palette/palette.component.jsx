import React from 'react';
import {withStyles} from '@material-ui/styles'

import styles from './palette.styles';

import Navbar from '../navbar/navbar.component';
import ColorBox from '../color-box/color-box.component';
import PaletteFooter from '../palette-footer/palette-footer.component';

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
		const {colors,paletteName,emoji,id} = this.props.palette;
		const {classes} = this.props;
		const {level,format} = this.state;
		const colorsBoxes = colors[level].map(color => 
				<ColorBox 
					name={color.name} 
					background={color[format]} 
					key={color.id} 
					id={color.id} 
					showingFullPalette
					moreUrl={`/palette/${id}/${color.id}`}
				/>
			)
		return (
			<div className={classes.palette} >
				<Navbar 
					level={level} 
					showingAllColors
					changeLevel={this.changeLevel} 
					handleChange={this.changeFormat}
				/>
				<div className={classes.paletteColor}>{colorsBoxes}</div>
				<PaletteFooter paletteName={paletteName} emoji={emoji} />
			</div>
		)
	}
}	

export default withStyles(styles)(Palatte);