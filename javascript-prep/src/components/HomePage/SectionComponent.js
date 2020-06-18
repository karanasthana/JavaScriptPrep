import React from 'react';
import './../../css/SectionComponent.css';
import { Link } from 'react-router-dom';

export default function SectionComponent(props) {
    return (
        <div className="section-container" style={{ backgroundImage: `url(${props.image})` }}>
            <Link className="button-container" to={{ pathname: `/topic/:${props.id}`, id: `${props.id}` }}>
                <div className="button">
                    {props.text}
                </div>
            </Link>
        </div>
    )
}