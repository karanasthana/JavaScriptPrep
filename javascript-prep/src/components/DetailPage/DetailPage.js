import React from 'react';
import ImportantLinksComponent from './ImportantLinksComponent';
import QuestionAnswerComponent from './QuestionAnswerComponent';
import '../../css/detail.css';
export default function DetailPage(props) {
    let json = require(`../../staticData/${props.match.params.id.substr(1)}.json`)
    return (
        <div className="detail-container" >
            <div className="qa-container">
                <h1 className="topic">{json.topic}</h1>
                <QuestionAnswerComponent />
            </div>
            <ImportantLinksComponent linksList={json.importantLinks} />
        </div>
    );
}