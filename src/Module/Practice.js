import React from 'react';

import {requlations} from '../data/regulations';

class Practice extends React.Component{
    key = null;
    lvl = null;
    pause = false;
    minutes = 0;
    data = {};
    assessments = new Array();
    abc = {
        '0': "Для офицеров и прапорщиков",
        '1': "Для солдат и сержантов 1 года обучения",
        '2': "Для солдат и сержантов 2 года обучения",
        '3': "Для солдат и сержантов 3 и выше года обучения"
    };

    constructor(props) {
        super(props);
        
        this.doStart = this.doStart.bind(this);
    }

    view(keys, lvl) {
        let x = 0;
        let tmp = this;

        this.key = keys;
        this.lvl = toString(lvl);
        this.data = requlations;

        let body = document.querySelector('.practiceController');

        body.innerHTML = ` 
            <p class = "tableTitlePracticle"> Время выполнения</p>
        `;

        this.data[keys][lvl][lvl].forEach(function(el) {
            if(Number(x) === 0) {
                tmp.assessments[0] = el.fine;
                body.innerHTML += ` 
                    <p class = "tablePracticle"> Отлично - ${el.fine}мин</p>
                `;
            }
            else if(Number(x) === 1) {
                tmp.assessments[1] = el.good;
                body.innerHTML += ` 
                    <p class = "tablePracticle">Хорошо - ${el.good}мин</p>
                `;
            }
            else if(Number(x) === 2) {
                tmp.assessments[2] = el.satisfact;
                body.innerHTML += `
                    <p class = "tablePracticle">Удовлетворительно - ${el.satisfact}мин</p>
                `;
            }

            x++;
        });

        document.querySelector('.doStart').style.display = 'block';
    }

    doStart() {
        document.querySelector('.Timer').style.display = 'flex';
        document.querySelector('.doStart').style.display = 'none';
        document.querySelector('.doEnd').style.display = 'block';

        const hour = document.getElementById('hour');
        const mins = document.getElementById('mins');
        const secs = document.getElementById('secs');
        let S = '00', M = '00', H = '00';

        setInterval(() => {
            if(!this.pause) {
                S = +S +1;
                if( Number(S) < 10 ) { S = '0' + S; }
                    if( Number(S) === 60 ) {
                        S = '00';
                        M = +M + 1;
                        if( Number(M) < 10 ) { M = '0' + M }
                        if( Number(M) === 60 ) {
                        M = '00';
                        H = +H + 1;
                        if( Number(H) < 10 ) { H = '0' + H }
                    }
                }
                secs.innerText = S;
                mins.innerText = M;
                hour.innerText = H;

                this.minutes = M;
            }
        }, 1000);
    }

    doEnd() {
        this.pause = true;
        document.querySelector('.doEnd').style.display = 'none';

        let text = document.querySelector('.Timer');

        if(this.minutes >= this.assessments[2]) {
            text.style.color = "#B8244E";
        } else if (this.minutes < this.assessments[2] && this.minutes > this.assessments[0]) {
            text.style.color = "#B89E41";
        } else {
            text.style.color = "#68B84F";
        }

        text.style.fontFamily = "Segue UI, sans-serif";
        text.style.fontSize = "4.5em";
    }

    render() {
        return(
            <div className = "practice">
                <div className = "practiceController">
                    <div className = "practiceModule">
                        <h4>Норматив 16</h4>
                        <p className = "practiceDescription">Задача выполняется на развёрнутой аппаратной с оборудованными рабочими местами, к которой подключены каналообразующая аппаратная, аппаратная П-178 МБ, электропитающая станция, 5 абонентских линий с подключёнными телефонными аппаратами.</p>
                        <button className = "startPractice" onClick = {(e) => this.view("16", 0)}>{this.abc[0]}</button>
                        <button className = "startPractice" onClick = {(e) => this.view("16", 1)}>{this.abc[1]}</button>
                        <button className = "startPractice" onClick = {(e) => this.view("16", 2)}>{this.abc[2]}</button>
                        <button className = "startPractice" onClick = {(e) => this.view("16", 3)}>{this.abc[3]}</button>
                    </div>

                    <hr className = "practiceLine" />

                    <div className = "practiceModule">
                        <h4>Норматив 16a</h4>
                        <p className = "practiceDescription">Задача выполняется на развёрнутой аппаратной с оборудованными рабочими местами, к которой подключены каналообразующая аппаратная, аппаратная П-178 МБ, электропитающая станция, 5 абонентских линий с подключёнными телефонными аппаратами.</p>
                        <button className = "startPractice" onClick = {(e) => this.view("16a", 0)}>{this.abc[0]}</button>
                        <button className = "startPractice" onClick = {(e) => this.view("16a", 1)}>{this.abc[1]}</button>
                        <button className = "startPractice" onClick = {(e) => this.view("16a", 2)}>{this.abc[2]}</button>
                        <button className = "startPractice" onClick = {(e) => this.view("16a", 3)}>{this.abc[3]}</button>
                    </div>

                    <hr className = "practiceLine" />

                    <div className = "practiceModule">
                        <h4>Норматив 36</h4>
                        <p className = "practiceDescription">Подгатовка к работе настройка и работа на оборудовании типа SHDSL модем.</p>
                        <button className = "startPractice" onClick = {(e) => this.view("36", 1)}>{this.abc[1]}</button>
                    </div>

                    <hr className = "practiceLine" />

                    <div className = "practiceModule">
                        <h4>Норматив 37</h4>
                        <p className = "practiceDescription">Подгатовка к работе настройка и работа на оборудовании типа ORION модем.</p>
                        <button className = "startPractice" onClick = {(e) => this.view("37", 1)}>{this.abc[1]}</button>
                    </div>

                    <hr className = "practiceLine" />

                    <div className = "practiceModule">
                        <h4>Норматив 40</h4>
                        <p className = "practiceDescription">Подгатовка к работе настройка и работа на оборудовании типа MEGATRANS-3M.</p>
                        <button className = "startPractice" onClick = {(e) => this.view("40", 1)}>{this.abc[1]}</button>
                    </div>

                    <hr className = "practiceLine" />

                    <div className = "practiceModule">
                        <h4>Норматив 55</h4>
                        <p className = "practiceDescription">Подгатовка к работе и организация соединительных линий между АТС ФМ</p>
                        <button className = "startPractice" onClick = {(e) => this.view("55", 1)}>{this.abc[1]}</button>
                    </div>

                    <hr className = "practiceLine" />

                    <div className = "practiceModule">
                        <h4>Норматив 56</h4>
                        <p className = "practiceDescription">Подгатовка к работе и организация соединительных линий между АТС ФМ (между АТС развернуты отдельные цифровые соединительные линии)</p>
                        <button className = "startPractice" onClick = {(e) => this.view("56", 1)}>{this.abc[1]}</button>
                    </div>

                </div>
                <div className = "doStartPractice">
                    <div className = "Timer">
                        <div id="hour"></div>:
                        <div id="mins"></div>:
                        <div id="secs"></div>
                    </div>

                    <button className = "doStart" onClick = {() => this.doStart()}>Приступить</button>
                    <button className = "doEnd" onClick = {() => this.doEnd()}>Завершить</button>
                </div>
            </div>
        );
    }
}

export default Practice;