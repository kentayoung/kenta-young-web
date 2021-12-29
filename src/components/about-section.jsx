import resume from '../assets/KentaYoungResume.pdf';

const AboutSection = () => {
	return (
		<section id='about' className='section-container'>
			<h2 className='section-header'>About</h2>
			<div className='section-content'>
				<div className='section-intro'>
					Hey, friends! <span>&#128075;</span>
				</div>
				<p>
					My name is Kenta Young, a Software Engineer based in Long Beach, California. I'm hard
					working and creative with more than 7 years of expertise. With a strong understanding of
					Javascript, HTML, and CSS coupled with a visually driven mind, I have a passion for
					developing stable and beautiful user interfaces.
				</p>
				<p>
					I'm always open to new opportunities to create, so please feel free to reach out and check
					out my{' '}
					<a href={resume} className='link-hover-blue' download='KentaYoungResume.pdf' target='_blank' rel='noreferrer'>
						resume
					</a>
					.
				</p>
			</div>
		</section>
	);
};

export default AboutSection;
