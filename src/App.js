import './App.css';
import './css/kentaYoungWeb.scss';
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import firebase from '../src/config/firebaseConfig';
import { getAnalytics } from 'firebase/analytics';
import { HelmetProvider } from 'react-helmet-async';

import Navbar from './components/navbar/navbar';
import Home from './routes/home';
const Photography = lazy(() => import('./routes/photography'));

function App() {
	getAnalytics(firebase);

	const updateViewportHeight = () => {
		document.documentElement.style.setProperty('--viewport-height', `${window.innerHeight}px`);
	};

	window.addEventListener('resize', updateViewportHeight);

	updateViewportHeight();

	return (
		<div className='app'>
			<HelmetProvider>
				<Router>
					<Navbar Router={Router} />
					<Suspense fallback={<div></div>}>
						<Routes>
							<Route exact path='/' element={<Home />} />
							<Route exact path='/photography' element={<Photography />} />
						</Routes>
					</Suspense>
				</Router>
			</HelmetProvider>
		</div>
	);
}

export default App;
