const styles = {
	root: {
		backgroundColor: 'blue',
		height: '100vh',
		display: 'flex',
		alignItems: 'flex-start',
		justifyContent: 'center'
	},
	container: {
		width: '50%',
		display: 'flex',
		alignItems: 'flex-start',
		flexDirection: 'column',
		flexWrap: 'wrap'
	},
	nav:{
		width: '100%',
		color: 'white',
		display: 'flex',
		justifyContent: 'space-between'
	},
	palettes: {
		width: '100%',
		boxSizing: 'border-box',
		display: 'grid',
		gridTemplateColumns: 'repeat(3,30%)',
		gridGap: '5%'
	}
}

export default styles;