import React from 'react';

export default function SectionComponent(props) {
    return (
        <div style={{ backgroundImage: `url(${props.image})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '800px' }}>
            <a style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{ position: 'relative', top: '10rem', padding: '20px', backgroundColor: 'deeppink' }}>
                    {props.text}
                </div>
            </a>
        </div>
    )
}