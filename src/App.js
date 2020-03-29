import React from 'react';
import {Route,Switch} from 'react-router-dom';
import './App.css';

import {generatePalette} from './colorHelper'
import seedColors from './seedColors';
import Palatte from './component/palette/palette.component';


function App() {
	console.log(generatePalette(seedColors[4]))
  return (
		<Switch>
			<Route exact path='/' render={()=><h1>home page</h1>}/>
			<Route exact path='/palette/:id' render={()=><h1>palette page</h1>}/>
		</Switch>
		
    // <div >
    //   <Palatte palette={generatePalette(seedColors[4])} />
    // </div>
  );
}

export default App;
