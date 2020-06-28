import React from 'react';
import ImportantLinksComponent from './ImportantLinksComponent';
import QuestionAnswerComponent from './QuestionAnswerComponent';
import HeaderComponent from './HeaderComponent';
import '../../css/detail.css';
import NavBar from './NavBar';

export default function Topic(props) {
    let json = require(`../../staticData/${props.match.params.id.substr(1)}.json`)
    return (
        <div className="detail-container">
            <NavBar />
            <HeaderComponent logo={json.logo} topic={json.topic} />
            <QuestionAnswerComponent questionsAndAnswers={json.questionsAndAnswers} />
            <ImportantLinksComponent linksList={json.importantLinks} />
        </div>
    );
}