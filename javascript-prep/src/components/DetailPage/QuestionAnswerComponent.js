import React from 'react';
import {Accordion, Card, Button} from 'react-bootstrap'
import '../../css/detail.css';

export default function QuestionAnswerComponent(props) {
    const questionsAndAnswersArray = props.questionsAndAnswers;
    return questionsAndAnswersArray.length > 0 ? questionsAndAnswersArray.map((element, index) => {
        return (
            <div key={index}>
                <Accordion >
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey={index}>
                            {element.question}
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey={index}>
                            <Card.Body>{element.answer}</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
    
            </div>
        )
    }) : null
    
}