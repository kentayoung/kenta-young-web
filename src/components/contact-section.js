import React from 'react';
import { IconContext } from 'react-icons';
// import { GrMapLocation } from 'react-icons/gr';
import { MdLocationPin, MdEmail, MdPhoneIphone } from 'react-icons/md';

const ContactSection = React.forwardRef((props, ref) => {
	return (
		<section id='contact' className='contact-cards' ref={ref}>
			<IconContext.Provider value={{ color: '#64a19d' }}>
				<div className='card'>
					<MdLocationPin className='card-icon' />
					<h4>Location</h4>
					<hr className='card-section-divider' />
					<div className='card-section-details'>Long Beach, California</div>
				</div>
				<div className='card'>
					<MdEmail className='card-icon' />
					<h4>Email</h4>
					<hr className='card-section-divider' />
					<div className='card-section-details'>
						<a href='mailto:kenta@kentayoung.dev' className='link-hover-mid'>
							Kenta@KentaYoung.dev
						</a>
					</div>
				</div>
				<div className='card'>
					<MdPhoneIphone className='card-icon' />
					<h4>Phone</h4>
					<hr className='card-section-divider' />
					<div className='card-section-details'>
						<a href='tel:303-249-0977' className='link-hover-mid'>
							303-249-0977
						</a>
					</div>
				</div>	
			</IconContext.Provider>
		</section>
	);
});

export default ContactSection;