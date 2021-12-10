import './App.css';
import './css/kentaYoungWeb.scss';
import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Routes,
	Navigate,
} from 'react-router-dom';
import firebase from '../src/config/firebaseConfig';
import { getAnalytics } from 'firebase/analytics';

import Navbar from './components/navbar/navbar';
import Home from './routes/home';
import Photography from './routes/photography';
import PageNotFound from './routes/pageNotFound';
import Footer from './components/footer';

function App() {
	getAnalytics(firebase);

	return (
		<div className='app'>
			<Router>
				<Navbar Router={Router} />
				<Routes>
					<Route exact path='/' element={<Home />} />
					<Route path='/photography' element={<Photography />} />
					<Route exact path='/404' element={<PageNotFound />} />
					<Route path='*' element={<Navigate to='/404' />} />
				</Routes>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
