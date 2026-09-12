const FeatureCard=({ icon, title, description, delay })=> {
     const Icon = ({ name, className = "" }) => (
      <i className={`fas fa-${name} ${className}`}></i>
    );
      return (
        <div className="feature-card" style={{ animationDelay: `${delay}s` }}>
          <div className="feature-icon">
            <Icon name={icon} />
          </div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      );
}

export default FeatureCard