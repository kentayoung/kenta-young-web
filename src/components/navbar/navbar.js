import React, { useState, useEffect } from 'react';
import { MenuItems } from './menu-items';
import {FaInstagram, FaLinkedin, FaFacebook} from 'react-icons/fa';

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
			{/* <div className='nav-brand'>KENTA</div> */}
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
										? { animation: `navLinkFadeIn .75s ease forwards ${i / MenuItems.length}s` }
										: { opacity: 1 }
								}
							>
								<a href={item.href} className='link-hover' onClick={handleTogglerClicked}>
									{item.display}
								</a>
							</li>
							)
						}
					)
				}
			<li className="nav-item nav-footer" style={
				togglerClicked
				? { animation: `navLinkFadeIn .75s ease forwards ${MenuItems.length / MenuItems.length}s` }
				: { opacity: 1 }
			}>

					<a href="https://www.linkedin.com/in/kentayoung" target="_blank" rel="noreferrer" className="icon-circle"><FaLinkedin/></a>
					<a href="https://www.instagram.com/kenta_young/" target="_blank" rel="noreferrer" className="icon-circle"><FaInstagram/></a>
					<a href="https://www.facebook.com/kentayoungphotography" target="_blank" rel='noreferrer' className="icon-circle"><FaFacebook/></a>
			</li>
				
			</ul>
		</nav>
	);
};

export default Navbar;
