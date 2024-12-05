// WavyBackground.jsx

import React, { useRef, useEffect } from 'react';

const WavyBackground = () => {
    const canvasRef = useRef(null);

    const draw = (ctx, mouseX, mouseY) => {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        const numberOfWaves = 3;
        const waveAmplitude = 20;
        const waveFrequency = 0.02;
        const lineWidth = 20; 

        for (let j = 0; j < numberOfWaves; j++) {
            ctx.beginPath();
            for (let i = 0; i < ctx.canvas.width; i++) {
                const distanceFromMouse = Math.sqrt(Math.pow(i - mouseX, 2) + Math.pow(mouseY, 2));
                const modifier = (Math.sin(distanceFromMouse * 0.01) + 1) / 2;
                ctx.lineTo(i, mouseY + Math.sin(i * waveFrequency + mouseX * 0.05) * waveAmplitude * modifier);
            }
            ctx.lineWidth = lineWidth;
            ctx.lineJoin = 'round'; 
            ctx.lineCap = 'round';  
            ctx.strokeStyle = `rgba(255, 255, 255, ${1 - j / numberOfWaves})`; 
            ctx.stroke();
        }
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        const handleMouseMove = (event) => {
            draw(ctx, event.clientX, event.clientY);
        };

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        draw(ctx, window.innerWidth / 2, window.innerHeight / 2);

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('resize', () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            draw(ctx, window.innerWidth / 2, window.innerHeight / 2);
        });

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return <canvas ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0, zIndex: -1 }} />;
};

export default WavyBackground;
