import React, { useState, useEffect } from 'react';
import { MenuItems } from './menu-items';

const Navbar = (props) => {
	const [togglerClicked, setTogglerClicked] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	useEffect(() => {
		window.addEventListener('scroll', () => {
			setScrolled(window.scrollY > 50);
		});
	}, []);

const handleTogglerClicked = () => {
	setTogglerClicked(!togglerClicked);
	if (togglerClicked) document.body.style.overflow = 'scroll';
	else document.body.style.overflow = 'hidden';
};



	return (
		<nav
			id='navbar'
			className={
				(togglerClicked ? 'active ' : '') + (scrolled ? 'scrolledNav' : '')
			}
		>
			<div className='nav-brand'>KENTA</div>
			<div
				onClick={handleTogglerClicked}
				className={togglerClicked ? 'nav-toggler active' : 'nav-toggler'}
			>
				<div className='nav-toggler-line1'></div>
				<div className='nav-toggler-line2'></div>
				<div className='nav-toggler-line3'></div>
			</div>
			<ul className={togglerClicked ? 'nav-items active' : 'nav-items'}>
				{MenuItems.map((item, i) => {
					return (
						<li
							className='nav-item'
							key={i}
							style={
								togglerClicked
									? { animation: `navLinkFadeIn 1s ease forwards ${i / MenuItems.length + 0.25}s` }
									: { opacity: 1 }
							}
						>
							<a href={item.href} className='link-hover' onClick={handleTogglerClicked}>
								{item.display}
							</a>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};

export default Navbar;
