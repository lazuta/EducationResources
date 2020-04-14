import React from 'react';

import Questions from './Questions';

import {data} from '../data/data';

export default function Control() {
    return(
        <div className = "question">
            <Questions data = {data}/>
        </div>
    );
}