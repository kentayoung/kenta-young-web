import './App.css';
import './css/kentaYoungWeb.scss';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import firebase from './config/firebaseConfig';
import { getAnalytics } from 'firebase/analytics';
import { HelmetProvider } from 'react-helmet-async';

import Navbar from './components/navbar/navbar';
import AnimatedRoutes from './routes/animatedRoutes';

function App() {
	let welcomeMessageLogged = false;
	const updateViewportHeight = () => {
		document.documentElement.style.setProperty('--viewport-height', `${window.innerHeight}px`);
	};
	window.addEventListener('resize', updateViewportHeight);
	updateViewportHeight();
	console.log(import.meta.env.MODE);
	if (import.meta.env.MODE !== "development") {
    //setting up analytics for prod
    getAnalytics(firebase);
  } else {
    console.log("localhost: turning off analytics and custom console");
  }

	const consoleWelcomeMessage = () => {
		if (welcomeMessageLogged) return;
		const consoleStyleMain = 'font-size: 14px;';
		const consoleStyleChild = 'font-size: 12px;';
		console.group(`%c👋 Fancy seeing you here. Don't forget to check out my other links.`, consoleStyleMain);
		console.log(`%c👨‍💻 Github - https://github.com/kentayoung`, consoleStyleChild + '');
		console.log(`%c📄 LinkedIn - https://www.linkedin.com/in/kentayoung`, consoleStyleChild);
		console.log(`%c📧 Email - Kenta@KentaYoung.dev`, consoleStyleChild);
		console.groupEnd();
	};

	consoleWelcomeMessage();

	return (
		<div className="app">
			<HelmetProvider>
				<Router>
					<Navbar Router={Router} />
					<AnimatedRoutes />
				</Router>
			</HelmetProvider>
		</div>
	);
}

export default App;
