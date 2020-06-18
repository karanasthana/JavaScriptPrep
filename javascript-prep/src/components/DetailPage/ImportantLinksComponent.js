import React from 'react';
import * as _ from 'lodash';

export default function ImportantLinksComponent(props) {

    let linksList = props.linksList;
    let LinksUI = _.map(linksList, function(link, index) {
        return (
            <li><a target="_blank" href={link}>{link}</a></li>
        );
    })

    return (
        <div>
            <ul>
                {LinksUI}
            </ul>
        </div>
    );
}