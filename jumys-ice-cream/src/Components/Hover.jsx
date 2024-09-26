import React, { useState } from 'react';
// import './FadeInComponent.css'; // Import your CSS file for styles

const FadeInComponent = () => {
  const [visible, setVisible] = useState({
    div1: false,
    div2: false,
    div3: false,
  });

  const handleMouseEnter = () => {
    setTimeout(() => setVisible((prev) => ({ ...prev, div1: true })), 100);
  };

  return (
    <div>
      <p>Demonstrate fade-in with different parameters.</p>
      <button onMouseEnter={handleMouseEnter}>Hover to fade in boxes</button>
      <br /><br />
      <div className={`box ${visible.div1 ? 'fade-in' : ''}`} style={{ backgroundColor: 'red' }}></div>

    </div>
  );
};

export default FadeInComponent;
