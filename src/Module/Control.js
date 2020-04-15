import React from 'react';

import Questions from './Questions';

import {data} from '../data/data';

export default function Control() {
    return(
        <div className = "control">
            <div>
                <h1 className = "controlTitle">Тесты по материалу</h1>
            </div>
            <div className = "controleLinks">
                <a href = ""> Тест 1: Основы построения многоканальных систем передачи </a>
            </div>
            <div>
                {/* TODO: GET RESULTS */}
            </div>
        </div>
    );
}