import React from 'react';

export default function SectionComponent(props) {
    return (
        <div style={{ backgroundImage: `url(${props.image})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '800px' }}>
            <p style={{margin: 0}}>
                {props.text}
            </p>
        </div>
    )
}