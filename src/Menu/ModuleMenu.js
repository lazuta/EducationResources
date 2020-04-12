import React from 'react';

import one from '../../src/images/Blocks/one.jpg';
import two from '../../src/images/Blocks/two.jpg';
import three from '../../src/images/Blocks/tre.jpg';
import four from '../../src/images/Blocks/four.jpg';
import five from '../../src/images/Blocks/five.jpg';

export default function ModuleMenu() {
    return(
        <div className = "BigMenu">
            
            <div className = "MenuElement">
                <div className = "El-Bg">
                    <img src = {one}></img>
                </div>
                <div className = "El-Body">
                    <div className = "El-container">
                        <p>Программа дисциплин</p>
                    </div>
                </div>
            </div>

            <div className = "MenuElement">
                <div className = "El-Bg">
                    <img src = {two}></img>
                </div>
                <div className = "El-Body">
                    <div className = "El-container">
                        <p>Программа дисциплин</p>
                    </div>
                </div>
            </div>

            <div className = "MenuElement">
                <div className = "El-Bg">
                    <img src = {three}></img>
                </div>
                <div className = "El-Body">
                    <div className = "El-container">
                        <p>Программа дисциплин</p>
                    </div>
                </div>
            </div>

            <div className = "MenuElement">
                <div className = "El-Bg">
                    <img src = {four}></img>
                </div>
                <div className = "El-Body">
                    <div className = "El-container">
                        <p>Программа дисциплин</p>
                    </div>
                </div>
            </div>

            <div className = "MenuElement">
                <div className = "El-Bg">
                    <img src = {five}></img>
                </div>
                <div className = "El-Body">
                    <div className = "El-container">
                        <p>Программа дисциплин</p>
                    </div>
                </div>
            </div>
        </div>
    );
}