import React from 'react';

export default function Nav() {
    return(
        <nav className = "navigation">
            <a href = "/">
                <p>Главная</p>
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
            <a href = "/gallery">
                <p>Фото и видео</p>
            </a>
        </nav>
    );
}