import React, { useState, useEffect } from 'react';
import { HashLink } from 'react-router-hash-link'
import { MenuItems } from './menu-items';
import {FaInstagram, FaLinkedin, FaFacebook, FaGithub} from 'react-icons/fa';

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

const setTogglerFalse = () => {
	setTogglerClicked(false)
	document.body.style.overflow = 'scroll';
}

const scrollWithOffset = (el) => {
	const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
	const yOffset = -80; 
	window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
}


	return (
		<nav
			id='navbar'
			className={
				(togglerClicked ? 'active ' : '') + (scrolled ? 'scrolledNav' : '')
			}
		>
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
										? { animation: `navLinkFadeIn .75s ease forwards ${(i / MenuItems.length) }s` }
										: { opacity: 1 }
								}
							>
								<HashLink scroll={el => scrollWithOffset(el)} to={item.href} className='link-hover' onClick={setTogglerFalse}>
									{item.display}
								</HashLink>
							</li>
							)
						}
					)
				}
			<li className="nav-item nav-footer" style={
				togglerClicked
				? { animation: `navLinkFadeIn .75s ease forwards ${(MenuItems.length ) / MenuItems.length}s` }
				: { opacity: 1 }
			}>

					<a id="linkedIn-KentaYoung" href="https://www.linkedin.com/in/kentayoung" target="_blank" rel="noreferrer" className="icon-circle"><FaLinkedin/></a>
					<a id="instagram-KentaYoung" href="https://www.instagram.com/kenta_young/" target="_blank" rel="noreferrer" className="icon-circle"><FaInstagram/></a>
					<a id="facebook-KentaYoung" href="https://www.facebook.com/kentayoungphotography" target="_blank" rel='noreferrer' className="icon-circle"><FaFacebook/></a>
					<a id="github-KentaYoung" href="https://github.com/kentayoung" target="_blank" rel='noreferrer' className="icon-circle"><FaGithub/></a>
			</li>
				
			</ul>
		</nav>
	);
};

export default Navbar;
