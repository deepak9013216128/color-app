import React from 'react';

import './App.css';

import {generatePalette} from './colorHelper'

import seedColors from './seedColors';

import Palatte from './component/palette/palette.component';


function App() {
	// console.log(generatePalette(seedColors[4]))
  return (
    <div >
      <Palatte palette={generatePalette(seedColors[4])} />
    </div>
  );
}

export default App;
