import './App.css';
import './css/kentaYoungWeb.scss';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import firebase from '../src/config/firebaseConfig';
import { getAnalytics } from 'firebase/analytics';

import Navbar from './components/navbar/navbar';
import Home from './routes/home';
import Photography from './routes/photography';
import PageNotFound from './routes/pageNotFound';

function App() {
	getAnalytics(firebase);

	const updateViewportHeight = () => {
		document.documentElement.style.setProperty(
			'--viewport-height',
			`${window.innerHeight}px`
		);
	};

	window.addEventListener('resize', updateViewportHeight);

	updateViewportHeight();

	return (
		<div className='app'>
			<Router>
				<Navbar Router={Router} />
				<Routes>
					<Route exact path='/' element={<Home />} />
					<Route path='/photography' element={<Photography />} />
					<Route path='*' element={<PageNotFound />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
