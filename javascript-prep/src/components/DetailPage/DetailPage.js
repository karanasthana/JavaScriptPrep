import React from 'react';
import ImportantLinksComponent from './ImportantLinksComponent';
import QuestionAnswerComponent from './QuestionAnswerComponent';
import '../../css/detail.css';
import BG from '../../assets/images/common.webp';
export default function DetailPage(props) {
    let json = require(`../../staticData/${props.match.params.id.substr(1)}.json`)
    return (
        <div className="detail-container">
            <div className="qa-container" style={{ backgroundImage: `url(${BG})`}}>
                <img src={json.logo} alt="Topic Logo" className="logo" />
                <h1 className="topic">{json.topic}</h1>
                
            </div>
            <QuestionAnswerComponent questionsAndAnswers={json.questionsAndAnswers} />
            <ImportantLinksComponent linksList={json.importantLinks} />
        </div>
    );
}