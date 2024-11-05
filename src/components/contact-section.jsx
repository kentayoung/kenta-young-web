import React from 'react';
import { IconContext } from 'react-icons';
import { MdLocationPin, MdEmail } from 'react-icons/md';

const ContactSection = React.forwardRef((props, ref) => {
	return (
		<section id='contact' className='contact-cards' ref={ref}>
			<IconContext.Provider value={{ color: '#64a19d' }}>
				<div className='card'>
					<MdLocationPin className='card-icon' />
					<h4 className="font-mid">Location</h4>
					<hr className='card-section-divider' />
					<div className='card-section-details'>SW Idaho</div>
				</div>
				<div className='card'>
					<MdEmail className='card-icon' />
					<h4 className="font-mid">Email</h4>
					<hr className='card-section-divider' />
					<div className='card-section-details'>
						<a href='mailto:kenta@kentayoung.dev' className='link-hover-mid'>
							Kenta@KentaYoung.dev
						</a>
					</div>
				</div>
			</IconContext.Provider>
		</section>
	);
});

ContactSection.displayName = "ContactSection";

export default ContactSection;