import React from 'react';
import './../../css/SectionComponent.css';

export default function SectionComponent(props) {
    return (
        <div className="section-container" style={{ backgroundImage: `url(${props.image})` }}>
            <a className="button-container">
                <div className="button">
                    {props.text}
                </div>
            </a>
        </div>
    )
}