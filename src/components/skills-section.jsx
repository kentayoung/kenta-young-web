import ProgressBar from './progressBar';

const SkillsSection = () => {
	return (
    <section id="skills" className="section-container">
      <h2 className="section-header">Skills</h2>
      <ProgressBar percent="95" title="Front End Development" />
      <ProgressBar percent="95" title="Shopify" />
      <ProgressBar percent="70" title="Back End Development" />
      <ProgressBar percent="90" title="Debugging" />
    </section>
  );
};

export default SkillsSection;
