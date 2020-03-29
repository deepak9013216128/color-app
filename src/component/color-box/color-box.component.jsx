import  React from 'react';

import './color-box.styles.css';

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
		const {name,background} = this.props;
		const {copied} = this.state;
		return (
			<CopyToClipboard text={background} onCopy={this.handleCopyState}>
				<div className='color-box' style={{background}}>
					<div style={{background}} className={`copy-overlay ${copied && "show"}`} />
					<div className={`copy-msg ${copied && "show"}`}>
						<h1>copied!</h1>
						<p>{background}</p>
					</div>
					<div className='container'>
						<div className='box-content'>
							<span>{name}</span>
						</div>
						<button className='copy-button' >Copy</button>
					</div>
					<span className='see-more'>More</span>
				</div>
			</CopyToClipboard>
		)
	}
}

export default ColorBox;