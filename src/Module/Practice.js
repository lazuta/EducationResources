import React from 'react';

import {requlations} from '../data/regulations';

class Practice extends React.Component{
    key = null;
    lvl = null;
    pause = false;
    data = {};
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

        this.key = keys;
        this.lvl = toString(lvl);
        this.data = requlations;

        let body = document.querySelector('.practiceController');

        body.innerHTML = ` 
            <p class = "tableTitlePracticle"> Время выполнения</p>
        `;

        this.data[keys][lvl][lvl].forEach(function(el) {
            if(x == 0) 
                body.innerHTML += ` 
                    <p class = "tablePracticle"> Отлично - ${el.fine}мин</p>
                `;
            else if(x == 1)
                body.innerHTML += ` 
                    <p class = "tablePracticle">Хорошо - ${el.good}мин</p>
                `;
            else if(x == 2)
                body.innerHTML += ` 
                    <p class = "tablePracticle">Удовлетворительно - ${el.satisfact}мин</p>
                `;

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
            console.log(this.pause);
            if(!this.pause) {
                S = +S +1;
                if( S < 10 ) { S = '0' + S; }
                    if( S == 60 ) {
                        S = '00';
                        M = +M + 1;
                        if( M < 10 ) { M = '0' + M }
                        if( M == 60 ) {
                        M = '00';
                        H = +H + 1;
                        if( H < 10 ) { H = '0' + H }
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
    }

    render() {
        return(
            <div>
                <div className = "practiceController">
                    <div className = "practiceModule">
                        <h4>Норматив 16</h4>
                        <button className = "startPractice" onClick = {(e) => this.view("16", 0)}>{this.abc[0]}</button>
                        <button className = "startPractice" onClick = {(e) => this.view("16", 1)}>{this.abc[1]}</button>
                        <button className = "startPractice" onClick = {(e) => this.view("16", 2)}>{this.abc[2]}</button>
                        <button className = "startPractice" onClick = {(e) => this.view("16", 3)}>{this.abc[3]}</button>
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