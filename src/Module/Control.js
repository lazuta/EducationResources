import React from 'react';


class Control extends React.Component{
    render() {
        return(
            <div className = "control">
            <div>
                <h1 className = "controlTitle">Тесты по материалу</h1>
            </div>
            <div className = "controleLinks">
                <a href = "/questions" > Тест 1: Основы построения многоканальных систем передачи </a>
            </div>
            <div>
                {/* TODO: GET RESULTS / DEL RESULT + PASS */}
            </div>
        </div>
        );
    }
}

export default Control;