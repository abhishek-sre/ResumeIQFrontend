import { useRef, useState } from "react";
import ProgressBar from "./ProgressBar"

const EvaluationPanle=()=>{
      const [demoScore, setDemoScore] = useState(84);
      const [animateDemo, setAnimateDemo] = useState(false);
    const demoRef = useRef(null);
    const Icon = ({ name, className = "" }) => (
      <i className={`fas fa-${name} ${className}`}></i>
    );

// Trigger a subtle "re-evaluation" animation on button click
    const handleReevaluate = () => {
    setDemoScore(70 + Math.floor(Math.random() * 25));
    setAnimateDemo(true);
    setTimeout(() => setAnimateDemo(false), 1200);
    };

    const ringDeg = (demoScore / 100) * 360;

    return(
        <div className="demo-section" ref={demoRef}>
            <div className="demo-info">
              <h2>Live evaluation preview</h2>
              <p>
                See how our engine breaks down a typical resume. Click the button 
                to simulate a new evaluation and watch the scores update.
              </p>
              <ul>
                <li><Icon name="check-circle" /> ATS-friendly formatting check</li>
                <li><Icon name="check-circle" /> Keyword & skill matching</li>
                <li><Icon name="check-circle" /> Impact & achievement scoring</li>
                <li><Icon name="check-circle" /> Readability & length analysis</li>
              </ul>
              <button 
                className="btn btn-primary" 
                style={{ marginTop: '1.5rem', alignSelf: 'flex-start' }}
                onClick={handleReevaluate}
              >
                <Icon name="redo-alt" /> Re-evaluate sample
              </button>
            </div>

            <div className="demo-panel">
              <div className="panel-header">
                <h3>
                  <Icon name="file-signature" /> 
                  Sample Resume Analysis
                </h3>
                <span className="tag">
                  <Icon name="clock" style={{ marginRight: '5px' }} />
                  Just now
                </span>
              </div>

              {/* animated score ring inside panel - updates with demoScore */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' }}>
                <div className="score-ring" style={{ marginBottom: 0 }}>
                  <div className="ring" style={{ background: `conic-gradient(#4facfe 0deg ${ringDeg}deg, #1a2740 ${ringDeg}deg 360deg)`, transition: 'background 0.6s ease' }}>
                    <span className="ring-value">{demoScore}</span>
                  </div>
                  <div className="score-label">
                    <small>Overall</small>
                    <strong>{demoScore >= 80 ? 'Strong' : demoScore >= 65 ? 'Good' : 'Needs work'}</strong>
                  </div>
                </div>
                <div style={{ flex: 1 }}>
                  <ProgressBar label="ATS Score" value={Math.min(demoScore + 8, 98)} delay={50} />
                  <ProgressBar label="Impact" value={Math.min(demoScore - 5, 95)} delay={150} />
                </div>
              </div>

              {/* evaluation metrics */}
              <div className="eval-metrics">
                <div className="metric">
                  <div className="value">{Math.floor(demoScore * 1.1)}</div>
                  <div className="label">Keywords</div>
                </div>
                <div className="metric">
                  <div className="value">{Math.floor(demoScore * 0.9)}</div>
                  <div className="label">Readability</div>
                </div>
                <div className="metric">
                  <div className="value">{Math.floor(demoScore * 0.95)}</div>
                  <div className="label">Format</div>
                </div>
                <div className="metric">
                  <div className="value">{Math.floor(demoScore * 0.85)}</div>
                  <div className="label">Impact</div>
                </div>
              </div>

              {/* subtle shimmering loading bar when animating */}
              {animateDemo && (
                <div style={{ marginTop: '1.5rem', height: '4px', borderRadius: '4px', overflow: 'hidden' }}>
                  <div className="shimmer" style={{ height: '100%', width: '100%' }}></div>
                </div>
              )}
            </div>
          </div>
    )
}
export default EvaluationPanle