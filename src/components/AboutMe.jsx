import React from 'react';

export default function AboutMe(props) {
    return (
        <div>
            <h3>About me</h3>
            <img src='/assets/niveImage.png' alt='test' style={{ margin: 'auto', borderRadius: '50%', maxHeight: '160px' }} />
            <p>Hi there, I am a food blogger cooking and sharing delicious recipes with the world.</p>
        </div>
    );
};