const ScoreRing=({ score = 84, label = "Overall Score" })=>{
    const deg = (score / 100) * 360;
    return (
    <div className="score-ring">
        <div className="ring" style={{ background: `conic-gradient(#4facfe 0deg ${deg}deg, #1a2740 ${deg}deg 360deg)` }}>
        <span className="ring-value">{score}</span>
        </div>
        <div className="score-label">
        <small>{label}</small>
        <strong>Excellent</strong>
        </div>
    </div>
    );
}
export default ScoreRing