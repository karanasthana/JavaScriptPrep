import React from 'react';
import * as _ from 'lodash';

export default function ImportantLinksComponent(props) {

    let linksList = props.linksList;
    console.log(linksList)
    let LinksUI = _.map(linksList, function(link, index) {
        return (
            <li key={index}><a target="_blank" href={link.link}>{link.text}</a></li>
        );
    })

    return (
        <div>
            <ul>
                {linksList[0].link!== '' ? LinksUI : ''}
            </ul>
        </div>
    );
}