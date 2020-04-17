import React from 'react';

import {t1} from '../data/t1';
import {t3} from '../data/t3';

class Questions extends React.Component{
    step = 0;
    trueAnswer;
    counter;
    data = {};

    constructor(props) {
        super(props);
            
        this.state = {
            checked: false
        }

        this.start = this.start.bind(this);
    }

    start() {
        let tmp;
        this.step = 0;
        this.counter = 0;
        this.data = {};

        if(localStorage.getItem('id')) {
            let storage = localStorage.getItem('id');

            if(storage == "t1") {
                this.data = t1;
            } else if(storage == "t3") {
                this.data = t3;
            }

            console.log(this.data);
        } else {
            this.data = t1;
        }

        console.log(this.data);

        document.querySelector('.finishTest').style.display = "none";
        document.querySelector('.repiatTest').style.display = "none";

        let result = document.querySelector('.TotalResultInput');
        if(result) { result.style.display = "none"; }

        if(!localStorage.getItem(this.data.id)) {
            tmp = {
                'id_test': this.data.id,
                'name': document.querySelector('#testStartName').value,
                'true_answers': 0,
                'answers': this.data.totalQuestions,
                'assessment': 0,
                'date': Date.now()
            }
        } else {
            tmp = {
                'id_test': this.data.id,
                'name': localStorage.getItem(this.data.id).name,
                'true_answers': 0,
                'answers': this.data.totalQuestions,
                'assessment': 0,
                'date': Date.now()
            }

            alert("Вы уже проходили данный тест. Предыдущий результат будет стерт.");
        }

        let login = document.querySelector('.login');
        if(login) { login.remove(); }

        localStorage.setItem(this.data.id, JSON.stringify(tmp));
        
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
        let question = this.data.questions[this.step].variants;
        
        for(let i = 0; i <= question.length - 1; i++) {
            let input = document.getElementById('answer' + i);

            if(input.checked === true && input.value === this.trueAnswer) {
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
        
        let questionTitle = document.querySelector('.testTitleH5');
        questionTitle.innerHTML = "Результат:";

        let total = Math.round((10 / this.data.totalQuestions) * this.counter);

        let button = document.querySelector('.repiatTest');
        button.style.display = "block";

        document.querySelector('.nextQuestion').style.display = 'none';
        document.querySelector('.finishTest').style.display = 'none';

        body.innerHTML = '';
        body.innerHTML = `
            <div class = "TotalResultInput">
                ${total}
            </div>
        `;
        
        localStorage.getItem(this.data.id);
    }

    show(step) {
        let answer;
        let question = this.data.questions[step];

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
                <div>

                </div>
            `;

            if(el.flag) {
                answer = el.title;
            }
        });

        let next = document.querySelector('.nextQuestion');
        let finish = document.querySelector('.finishTest');
        
        if(step < this.data.questions.length - 1) {
            next.style.display = 'block';
        }
        else if(step === this.data.questions.length - 1) {
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
                        <button className = "repiatTest" onClick = {(e) => this.start(e)}>Пройти заново</button>
                    </div>
                </div>
            </div>
        );

    }
}

export default Questions;