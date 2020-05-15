import React from 'react';

import img1 from '../images/Images/20200328_102847.jpg';
import video from '../images/Images/20200328_103125.mp4';
import video2 from '../images/Images/20200328_103253.mp4';

import img from '../images/Images/20200328_101541.jpg';
import img_o from '../images/Images/20200328_101722.jpg';
import img_t from '../images/Images/20200328_101710.jpg';
import img_th from '../images/Images/20200328_101856.jpg';
import img_f from '../images/Images/20200328_101925.jpg';
import img_fi from '../images/Images/20200328_102115.jpg';
import img_s from '../images/Images/20200328_102847.jpg';

export default function Gallery() {
    return(
        <div className = "theory">

            <div className = "g-1">
                <h2>Организация громкоговорящей связи с использованием БС-1 </h2>
                <video width="400" controls="controls" muted>
                    <source src = { video } type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'/>
                </video>
                <p>Видео 1 - Организация шлефов</p>
                
                <video width="400" controls="controls" muted>
                    <source src = { video2 } type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'/>
                </video>
                <p>Видео 2 - Работас с БС-1</p>
            </div>

            <div className = "g-1">
                <h2>Проверка потока E1 посредством AFK-3 </h2>
                <img src = { img } />
                <p>Рисунок 1 - Коммуникационное поле</p>

                <img src = { img_o } />
                <p>Рисунок 2 - Установка шлейфа по потоку E1 (Аудитория 1)</p>

                <img src = { img_t } />
                <p>Рисунок 3 - Установка шлефов для измерения потока E1 (Аудитория 2)</p>

                <img src = { img_th } />
                <p>Рисунок 4 - Крепление зажимов AFK-3 на шлейфе</p>

                <img src = { img_f } />
                <p>Рисунок 5 - Подключение зажимов к AFK-3</p>

                <img src = { img_fi } />
                <p>Рисунок 6 - Включаем AFK</p>

                <img src = { img_s } />
                <p>Рисунок 7 - Проверка соединения Orion'ов</p>
            </div>
        </div>
    );
}