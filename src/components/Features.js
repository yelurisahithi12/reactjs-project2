import React from 'react';
import './Features.css'; // Importing the CSS file for Features styles

const Features = () => {
  return (
    <section className="features">
      <h2>Features</h2>
      <div className="feature-item">
        <h3>Themes</h3>
        <p>Choose from multiple themes to match your style.</p>
      </div>
      <div className="feature-item">
        <h3>Customization</h3>
        <p>Customize artwork, typography, and more.</p>
      </div>
      <div className="feature-item">
        <h3>Integrations</h3>
        <p>Integrate with Last.fm and Spotify.</p>
      </div>
    </section>
  );
}

export default Features;
