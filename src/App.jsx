import React from 'react';
import './App.css';

import Canvas from './layouts/Canvas';
import Controlls from './layouts/Controlls';
import Sorting from './layouts/Sorting';

export default () => {
	return (
		<div className='App'>
			<Canvas />
			<Controlls />
			<Sorting />
		</div>
	)
}