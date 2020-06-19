import React from 'react';
import {Accordion, Card, Button} from 'react-bootstrap'
import '../../css/detail.css';

export default function QuestionAnswerComponent(props) {
    return (
        <div>
            <Accordion defaultActiveKey="0">
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                        Hoisting
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution regardless of whether their scope is global or local. Every time you write a program in javascript, it runs in an environment and that environment is called execution context. There are two types of execution contexts</Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="1">
                        Closures
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>A closure is an inner function which gives you access to an outer function’s scope from inside even before the function is returned. In JavaScript, closures are created every time a function is created, at function creation time. A closure is the combination of a function and the lexical environment within which that function was declared. This environment consists of any local variables that were in-scope at the time the closure was created.</Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>

        </div>
    );
}