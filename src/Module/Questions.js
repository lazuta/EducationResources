import React from 'react';

import {data} from '../data/data'

class Questions extends React.Component{
    step = 0;
    trueAnswer;
    counter = 0;

    constructor(props) {
        super(props);
            
        this.state = {
            checked: false,
            counter: 0
        }

        this.start = this.start.bind(this);
    }

    start() {
        let tmp = {
            'id_test': data.id + "_" + document.querySelector('#testStartName').value + "_" + Date.now(),
            'name': document.querySelector('#testStartName').value,
            'true_answers': 0,
            'assessment': 0,
            'date': Date.now()
        }

        localStorage.setItem('1', tmp);

        document.querySelector('.login').remove();
        
        this.anstrueAnswerwer = this.show(this.step);
    }

    nextQuestuion(event) {
        this.check();
        
        let body = document.querySelector('.testAnswers');

        body.innerHTML = "";

        this.step++;
        this.show(this.step);
    }

    check(props) {
        let question = data.questions[this.step].variants;
        
        for(let i = 0; i <= question.length - 1; i++) {
            let input = document.getElementById('answer' + i);

            if(input.checked == true && input.value == this.trueAnswer) {
                this.counter++;
                break;
            } else {
                continue;
            }
        }
    }

    finish(e) {
        this.check();

        let body = document.querySelector('.testAnswers');
        let button = document.querySelector('.testButton');
        body.innerHTML = '';
        body.innerHTML = `
            <div>
                ${this.counter}
            </div>
        `;
        // TOTAl
    }

    show(step) {
        let answer;
        let question = data.questions[step];

        let questionTitle = document.querySelector('.testTitleH5');
        questionTitle.innerHTML = "Вопрос " + (step + 1) + " - " + question.title;

        let body = document.querySelector('.testAnswers');

        question.variants.map(function(el, index) {
            body.innerHTML += `
                <div class = "testBlockInput">
                    <input type = "checkbox" id = "answer${ index }" value = "${ el.title }"/>
                    <label for = "answer${ index }" class = "labelTest">
                        ${ el.title }
                    </label>
                </div>
            `;

            if(el.flag) {
                answer = el.title;
            }
        });

        let next = document.querySelector('.nextQuestion');
        let finish = document.querySelector('.finishTest');
        
        if(step < data.questions.length - 1) {
            next.style.display = 'block';
        }
        else if(step = data.questions.length - 1) {
            next.style.display = 'none';
            finish.style.display = 'block';
        }

        this.trueAnswer = answer;
    }

    render() {

       return(
            <div className = "test">
                <div className = "testBody">
                    <div className = "testQuestion">
                        <h5 className = "testTitleH5">Введите Ваши данные</h5>
                    </div>
                    <div className = "testAnswers">
                        <div className = "login">
                            <input  type="text" id="testStartName" placeholder = "Ф.И.О" maxLength = "30"/>
                            <button className = "StartTest" onClick = {() => this.start()}>Начать тест</button>
                        </div>
                    </div>
                    <div className = "testButton">
                        <button className = "nextQuestion" onClick = {(e) => this.nextQuestuion(e)}>Следющий вопрос</button>
                        <button className = "finishTest" onClick = {(e) => this.finish(e)}>Завершить тест</button>
                    </div>
                </div>
            </div>
        );

    }
}

export default Questions;