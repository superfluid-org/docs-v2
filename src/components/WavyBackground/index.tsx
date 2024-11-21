// VideoBackground.jsx

import React from 'react';

const WavyBackground = () => {
    return (
        <video
            autoPlay
            loop
            muted
            playsInline
            style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                top: '-20%',
                left: 0,
                objectFit: 'cover',
                opacity: 0.5,
                zIndex: 0,
                backgroundColor: 'transparent',
            }}
        >
            <source src="img/hero-fluid.webm" type="video/webm" />
        </video>
    );
};

export default WavyBackground;
