import React from 'react';

export default function Nav() {
    return(
        <nav className = "navigation">
            <a href = "program">
                <p>Программа дисциплин</p>
            </a>
            <a href = "/theory">
                <p>Теория по курсу</p>
            </a>
            <a href = "/practice">
                <p>Практика</p>
            </a>
            <a href = "/control">
                <p>Контроль знаний</p>
            </a>
            <a href = "/materials">
                <p>Материал</p>
            </a>
        </nav>
    );
}