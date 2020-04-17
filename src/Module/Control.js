import React from 'react';

import {t1} from '../data/t1';
import {t3} from '../data/t3';

class Control extends React.Component{
    constructor(props) {
        super(props);
            

        this.setTest = this.setTest.bind(this);
    }

    setTest(id) {
        localStorage.setItem('id', id)
    }

    render() {
        return(
            <div className = "control">
            <div>
                <h1 className = "controlTitle">Тесты по материалу</h1>
            </div>
            <div className = "controleLinks">
                <a href = "/questions" onClick = {() => this.setTest(t1.id)}> Тест 1: Основы построения многоканальных систем передачи </a>
                <a href = "/questions" onClick = {() => this.setTest(t3.id)}> Тест 3: Техническое обслуживание аппаратной П-178МБ </a>
            </div>
            <div>
                {/* TODO: GET RESULTS / DEL RESULT + PASS */}
            </div>
        </div>
        );
    }
}

export default Control;