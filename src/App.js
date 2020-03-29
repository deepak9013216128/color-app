import React from 'react';
import {Route,Switch} from 'react-router-dom';
import './App.css';

import {generatePalette} from './colorHelper'
import seedColors from './seedColors';
import Palette from './component/palette/palette.component';


class App extends React.Component {
	findPalette = (id) =>(
		seedColors.find(palette => palette.id === id)
	)
	
	render(){
		return (
			<Switch>
				<Route exact path='/' render={()=><h1>home page</h1>}/>
				<Route exact path='/palette/:id' render={ (routeProps)=>(
						<Palette 
							palette={generatePalette(
								this.findPalette(routeProps.match.params.id)
							)}
						/>
					)}
				/>
			</Switch>

			// <div >
			//   <Palatte palette={generatePalette(seedColors[4])} />
			// </div>
  	);
	}
	
  
}

export default App;
