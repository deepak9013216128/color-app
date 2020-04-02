import  React from 'react';
import {Link} from 'react-router-dom';
import {withStyles} from '@material-ui/styles';

import './color-box.styles.css';
import styles from './color-box.styles.jsx';

import {CopyToClipboard} from 'react-copy-to-clipboard';

class ColorBox extends React.Component {
	constructor(props){
		super(props);
		this.state = {copied: false}
	}
	handleCopyState = () =>{
		this.setState({copied:true},()=>{
			setTimeout(() => this.setState({copied:false}),1500)
		});
	}
	
	render(){
		const {name,background,moreUrl,showingFullPalette,classes} = this.props;
		const {copied} = this.state;
		return (
			<CopyToClipboard text={background} onCopy={this.handleCopyState}>
				<div className={classes.colorBox} style={{background}}>
					<div 
						style={{background}} 
						className={`${classes.copyOverlay} ${copied && classes.showOverlay}`} 
					/>
					<div className={`${classes.copyMessage} ${copied && classes.showMessage}`}>
						<h1>copied!</h1>
						<p className={classes.copyText} >{background}</p>
					</div>
					<div className='container'>
						<div className={classes.boxContent} >
							<span className={classes.colorName}>{name}</span>
						</div>
						<button className={classes.copyButton} >Copy</button>
					</div>
					{
						showingFullPalette && (
						<Link to={moreUrl} onClick={e=> e.stopPropagation()}>
							<span className={classes.seeMore}>More</span>
						</Link>
						)
					}
				</div>
			</CopyToClipboard>
		)
	}
}

export default withStyles(styles)(ColorBox);