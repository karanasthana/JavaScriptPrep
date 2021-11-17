import React from 'react';
import ImportantLinksComponent from './ImportantLinksComponent';
import QuestionAnswerComponent from './QuestionAnswerComponent';
import HeaderComponent from './HeaderComponent';
import '../../css/detail.css';
import { Button } from 'react-bootstrap';
import _ from 'lodash';

export default function Topic(props) {
    let json = require(`../../staticData/${props.match.params.id.substr(1)}.json`)
    let expandAll = (e) => {
        let allCardHeaders = document.getElementsByClassName('toggle-card');
        _.each(allCardHeaders, ($el) => {
            $el.click();
        });
        
        e.target.innerHTML = e.target.innerHTML === 'Expand All' ? 'Collapse All' : 'Expand All';
    };

    return (
        <div className="detail-container">
            <Button onClick={expandAll} className={'expand-collapse-all'} id={'ExpColBtn'}>
                Expand All
            </Button>
            <HeaderComponent logo={json.logo} topic={json.topic} />
            <QuestionAnswerComponent questionsAndAnswers={json.questionsAndAnswers} />
            <ImportantLinksComponent linksList={json.importantLinks} />
        </div>
    );
}