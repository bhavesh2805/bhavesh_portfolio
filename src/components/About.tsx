import "./styles/Career.css";
const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Development Intern</h4>
                <h5>Intern Crowd LLP</h5>
              </div>
              <h3>2021</h3>
            </div>
            <p>
              Developed and maintained web application features, collaborating
              with the team to deliver responsive and user-friendly interfaces.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Analyst Intern</h4>
                <h5>Oasis Infobyte</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Analyzed large datasets to extract actionable insights, built
              dashboards, and automated reporting workflows using Python and SQL.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Science Intern</h4>
                <h5>TEACHNOOK</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Built and deployed machine learning models for classification and
              prediction tasks. Applied NLP techniques and data preprocessing
              pipelines to drive data-driven decision making.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>M.S. Data Analytics Engineering</h4>
                <h5>Northeastern University</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Advancing expertise in AI/ML, NLP, and data engineering. Building
              production-grade systems including a RAG-based conversational AI,
              ECG signal classifier, and fraud detection pipeline.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Career;