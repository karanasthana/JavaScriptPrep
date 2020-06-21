import React from 'react';
import * as _ from 'lodash';
import {Col} from 'react-bootstrap'
import '../../css/detail.css'

export default function ImportantLinksComponent(props) {

    let linksList = props.linksList;
    console.log(linksList)
    let LinksUI = _.map(linksList, function(link, index) {
        return (
            <li key={index}><a target="_blank" href={link.link}>{link.text}</a></li>
        );
    })

    return (
        linksList[0].link!== '' ?
        <div>
            <h1 className="topic">Important Links</h1>
            <ul className="links-container">
                <Col md={{ span: 10, offset: 1 }}>
                    { LinksUI }
                </Col>
                
            </ul>
        </div> : '' 
    );
}