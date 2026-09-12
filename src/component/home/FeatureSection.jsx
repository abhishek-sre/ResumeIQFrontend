import FeatureCard from "./FeatureCard"

const FeatureSection=()=>{
     const Icon = ({ name, className = "" }) => (
      <i className={`fas fa-${name} ${className}`}></i>
    );
    return(
        <>
        <div className="section-label">Why ResumeIQ</div>
          <h2 className="section-title">Smarter evaluation, better results</h2>
          <div className="features-grid">
            <FeatureCard
              icon="robot"
              title="AI-Powered Insights"
              description="Advanced algorithms scan your resume for keywords, structure, and impact — just like a recruiter."
              delay={0.1}
            />
            <FeatureCard
              icon="chart-pie"
              title="Detailed Scoring"
              description="Get a breakdown across ATS compatibility, readability, achievements, and skill relevance."
              delay={0.2}
            />
            <FeatureCard
              icon="lightbulb"
              title="Actionable Tips"
              description="Receive personalized suggestions to improve weak areas and highlight your unique value."
              delay={0.3}
            />
            <FeatureCard
              icon="clock"
              title="Instant Feedback"
              description="No waiting. Upload or paste your resume and see results in seconds, right in your browser."
              delay={0.4}
            />
          </div>
        </>
    )
}
export default FeatureSection