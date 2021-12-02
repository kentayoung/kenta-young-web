import React from 'react';
import ProgressBar from './progressBar';

const SkillsSection = () => {
	return (
		<section id='skills' className='section-container'>
			<div className='section-header'>Skills</div>
			<ProgressBar percent='95' title='Front End Development' />
      <ProgressBar percent='70' title='Back End Development' />
      <ProgressBar percent='90' title='Debugging' />
      <ProgressBar percent='85' title='Agile' />
		</section>
	);
};

export default SkillsSection;
