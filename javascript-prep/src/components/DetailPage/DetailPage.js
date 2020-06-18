import React,{Component} from 'react';
import ImportantLinksComponent from './ImportantLinksComponent';

export default function DetailPage(props) {
    return (
        <div>
            <ImportantLinksComponent linksArr={props.importantLinks} />
        </div>
    )
}