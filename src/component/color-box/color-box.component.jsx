import  React from 'react';
import {Link} from 'react-router-dom';
import chroma from 'chroma-js';
import {withStyles} from '@material-ui/styles';

import './color-box.styles.css';

import {CopyToClipboard} from 'react-copy-to-clipboard';

const styles = {
	colorBox: {
		width: '20%',
		height: props => props.showingFullPalette ?'25%':'50%',
		margin: '0 auto',
		display: 'inline-block',
		position: 'relative',
		cursor: 'pointer',
		marginBottom: '-3.5px',
		"&:hover button": {
			opacity: '1'
		}
	},
	copyText :{
		color: props => chroma(props.background).luminance() >=0.7 ? 'black' : 'white'
	},
	colorName: {
		color: props => chroma(props.background).luminance() <=0.08 ? 'white' : 'black'
	},
	copyButton: {
		color: props => chroma(props.background).luminance() >=0.7 ? 'rgba(0,0,0,0.6)' : 'white',
		width: '100px',
		height: '30px',
		position: 'absolute',
		display: 'inline-block',
		top: '50%',
		left: '50%',
		marginLeft: '-50px',
		marginBottom: '-15px',
		textAlign: 'center',
		outline: 'none',
		backgroundColor: 'rgba(255,255,255,0.3)',
		fontSize: '1rem',
		lineHeight: '30px',
		textTransform: 'uppercase',
		border: 'none',
		textCecoration: 'none',
		opacity: '0'
	},
	seeMore: {
		color: props => chroma(props.background).luminance() >=0.6 ? 'rgba(0,0,0,0.6)' : 'white',
		background: 'rgba(255,255,255,0.3)',
		position: 'absolute',
		border: 'none',
		right: '0px',
		bottom: '0px',
		height: '30px',
		width: '60px',
		textAlign: 'center',
		lineHeight: '30px',
		textTransform: 'uppercase'
	}
}

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
					<div style={{background}} className={`copy-overlay ${copied && "show"}`} />
					<div className={`copy-msg ${copied && "show"}`}>
						<h1>copied!</h1>
						<p className={classes.copyText} >{background}</p>
					</div>
					<div className='container'>
						<div className='box-content'>
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