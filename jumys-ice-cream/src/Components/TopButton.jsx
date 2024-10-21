import React, { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
    const [visible, setVisible] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    // Show or hide the button based on scroll position
    const handleScroll = () => {
        if (window.scrollY > 300) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    };

    // Check screen size to update button position
    const handleResize = () => {
        setIsSmallScreen(window.innerWidth <= 1200);
    };

    // Add event listeners on component mount
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);

        // Check the screen size on the initial render
        handleResize();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        visible && (
            <button 
                onClick={scrollToTop}
                style={{
                    position: 'fixed',
                    bottom: isSmallScreen ? '80px' : '20px',
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
