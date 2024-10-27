// src/app/components/FilloutEmbed.tsx
"use client"
import { useEffect } from 'react';

const FilloutEmbed: React.FC = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://server.fillout.com/embed/v1/';
        script.async = true;
        document.body.appendChild(script);
        
        // Clean up the script on component unmount
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div
            style={{ width: '100%', height: '500px' }}
            data-fillout-id="8fQziGv19ius"
            data-fillout-embed-type="standard"
            data-fillout-inherit-parameters
            data-fillout-dynamic-resize
        ></div>
    );
};

export default FilloutEmbed;
