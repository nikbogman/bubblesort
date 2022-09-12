import React from 'react';
import './App.css';

import Canvas from './layouts/Canvas';
import Controlls from './layouts/Controlls';
import SortAlgos from './layouts/SortAlgos';

export default () => (<div className='App'>
	<Canvas />
	<Controlls />
	<SortAlgos />
</div>)