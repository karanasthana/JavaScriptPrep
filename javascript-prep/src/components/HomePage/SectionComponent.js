import React from 'react';
import './../../css/SectionComponent.css';
import { Link } from 'react-router-dom';

export default function SectionComponent(props) {
    return (
        <div className="section-container" style={{ backgroundImage: `url(${props.image})` }}>
            <h2>
                {`${props.text.toUpperCase()}`}
            </h2>
            <Link className="button-container" to={{ pathname: `/topic/:${props.id}`, id: `${props.id}`, json: `${props.json}` }} id={props.id}>
                <div className="button">
                    Learn {props.text}
                </div>
            </Link>
        </div>
    )
}