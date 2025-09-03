export default function ProjectsFilter() {
  return (
    <div className="about-cards-grid">
      <div className="about-card">
        <img src="/icons/graduation.png" alt="student" className=" w-40 h-40 bg-[#353536] mx-auto mt-8 mb-3 rounded-xl"/>
        <div>
          <h2>Student</h2>
          <p>Currently studying Data Engineering and Analysis at Rzeszów University of Technology</p>
        </div>
      </div>
      <div className="about-card">
        <img src="/icons/phone.png" alt="apps" className=" w-40 h-40 bg-[#353536] mx-auto mt-8 mb-3 rounded-xl"/>
        <div>
          <h2>Desktop & Mobile Apps</h2>
          <p>Designing small-scale applications to automate and simplify tasks</p>
        </div>
      </div>
      <div className="about-card">
        <img src="/icons/machinelearning.png" alt="ml" className=" w-40 h-40 bg-[#353536] mx-auto mt-8 mb-3 rounded-xl"/>
        <div>
          <h2>Machine Learning</h2>
          <p>Learning and applying ML in academic and personal projects</p>
        </div>
      </div>
      <div className="about-card">
        <img src="/icons/automation.png" alt="automation" className=" w-40 h-40 bg-[#353536] mx-auto mt-8 mb-3 rounded-xl"/>
        <div>
          <h2>Automations</h2>
          <p>Creating automations to optimize workflows and save time</p>
        </div>
      </div>
    </div>
  );
}
