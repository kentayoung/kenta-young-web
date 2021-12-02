import './App.css';
import './css/kentaYoungWeb.scss';
import React from 'react';

import Navbar from './components/navbar/navbar';
import Masthead from './components/masthead';
import AboutSection from './components/about-section';
import SkillsSection from './components/skills-section';
import ContactSection from './components/contact-section';
import Footer from './components/footer';

function App() {
	return (
		<div className='app'>
			<Navbar />
			<Masthead />
			<AboutSection />
			<SkillsSection />
			<ContactSection />
			<Footer />
		</div>
	);
}

export default App;
