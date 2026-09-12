import { useState } from "react";
import ProgressBar from "./ProgressBar";
import ScoreRing from "./ScoreRing";

const HeroSection=()=>{

    // state for demo interactivity (simulated)
    const [demoScore, setDemoScore] = useState(84);
    const [animateDemo, setAnimateDemo] = useState(false);
      
    const Icon = ({ name, className = "" }) => (
      <i className={`fas fa-${name} ${className}`}></i>
    );

      // Trigger a subtle "re-evaluation" animation on button click
      const handleReevaluate = () => {
        setDemoScore(70 + Math.floor(Math.random() * 25));
        setAnimateDemo(true);
        setTimeout(() => setAnimateDemo(false), 1200);
      };


    return(
        <section className="hero">
            <div className="hero-content">
              <div className="badge">
                <Icon name="sparkles" style={{ marginRight: '6px' }} />
                AI-powered resume analysis
              </div>
              <h1>
                Unlock your <br />
                <i>career potential</i>
              </h1>
              <p>
                Get instant, actionable feedback on your resume. 
                Our evaluation engine highlights strengths, spots gaps, 
                and helps you land more interviews.
              </p>
              <div className="cta-group">
                <button className="btn btn-primary" onClick={handleReevaluate}>
                  <Icon name="chart-line" /> Evaluate now
                </button>
                <button className="btn btn-outline">
                  <Icon name="play" /> How it works
                </button>
              </div>
            </div>

            <div className="hero-visual">
              <div className="glass-card">
                <ScoreRing score={demoScore} label="Resume Score" />
                <div style={{ marginTop: '1.2rem' }}>
                  <ProgressBar label="ATS Compatibility" value={92} delay={100} />
                  <ProgressBar label="Impact & Achievements" value={78} delay={300} />
                  <ProgressBar label="Formatting" value={88} delay={500} />
                </div>
                <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'flex-end' }}>
                  <span style={{ fontSize: '0.8rem', color: '#7fc9ff' }}>
                    <Icon name="sync-alt" className={animateDemo ? 'fa-spin' : ''} /> Updated just now
                  </span>
                </div>
              </div>
            </div>
          </section>
    )
}
export default HeroSection