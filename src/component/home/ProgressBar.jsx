import { useEffect, useState } from "react";

const ProgressBar=({ label, value, delay = 0 })=> {
    const [width, setWidth] = useState(0);

    useEffect(() => {
    const timer = setTimeout(() => setWidth(value), 100 + delay);
    return () => clearTimeout(timer);
    }, [value, delay]);

    return (
    <div className="skill-item">
        <div className="skill-header">
        <span>{label}</span>
        <span>{value}%</span>
        </div>
        <div className="progress-bar">
        <div
            className="progress-bar-fill"
            style={{ width: `${width}%` }}
        ></div>
        </div>
    </div>
    );
}

export default ProgressBar