import React from 'react';
import {withStyles} from '@material-ui/styles';

import styles from './palette-list.styles';

import MiniPalette from '../mini-palette/mini-palette.component';

class PaletteList extends React.Component {
	goToPalette = (id) =>{
		this.props.history.push(`/palette/${id}`)
	}
	render() {
		const {palettes,classes} = this.props;
		
		return (
			<div className={classes.root}>
				<div className={classes.container}>
					<nav className={classes.nav} >
						<h1>React Palette</h1>
					</nav>
					
					<div className={classes.palettes} >
						{
							palettes.map(palette => 
								<MiniPalette {...palette} handleClick={()=>this.goToPalette(palette.id)} />
							)
						}
					</div>
				</div>
			</div>
		)
	}
}

export default withStyles(styles)(PaletteList);