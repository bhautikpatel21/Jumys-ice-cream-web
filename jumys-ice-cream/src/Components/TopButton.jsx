// ScrollToTopButton.js
import React, { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
    const [visible, setVisible] = useState(false);

    // Show or hide the button based on scroll position
    const handleScroll = () => {
        if (window.scrollY > 300) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    };

    // Scroll to the top smoothly
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Add event listener on component mount
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        visible && (
            <button
                onClick={scrollToTop}
                style={{
                    position: 'fixed',
                    bottom: '20px',
                    right: '20px',
                    backgroundColor: 'red',
                    color: 'white',
                    border: 'none',
                    padding: '10px 10px',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    zIndex: 1000,
                }}
            >
                Top
            </button>
        )
    );
};

export default ScrollToTopButton;
