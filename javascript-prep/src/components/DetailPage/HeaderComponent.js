import React from 'react';
import BG from '../../assets/images/common.webp';
export default function HeaderComponent(props) {
    return(
        <div className="qa-container" style={{ backgroundImage: `url(${BG})`}}>
            <img src={props.logo} alt="Topic Logo" className="logo" />
            <h1 className="topic">{props.topic}</h1>
        </div>
    )
}