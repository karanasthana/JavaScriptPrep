import React from 'react';
import ImportantLinksComponent from './ImportantLinksComponent';

export default function DetailPage(props) {
    let json = require(`../../staticData/${props.match.params.id.substr(1)}.json`)
    return (
        <div>
            <ImportantLinksComponent linksList={json.importantLinks} />
        </div>
    );
}