import React from 'react';

import Nav from './Menu/Nav';
import ModuleMenu from './Menu/ModuleMenu';
import {Route, BrowserRouter} from 'react-router-dom';

import imgBg from './images/bg.jpg';
import imgLogo from './images/bsac_logo.png';

let appBody = {
    width: "100%",
    minHeight: "100vh",
    background: "#20232A",
}

let headerBody = {
  height: "300px",
  width: "100%",
  backgroundImage: 'linear-gradient(to top, #20232A 0%, transparent 50%), url(' + imgBg + ')',
  backgroundSize: 'cover',
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
}

function App() {
  return (
    <section style = {appBody}>
      <div style = {headerBody}>
        <div className = "textBody">
            <img src = {imgLogo} className = "imageBody"></img>
            <h1>Электронный учебно-методический комплекс</h1>
            <p>по дисциплине</p>
            <h2>"Специальная подготовка"</h2>
            <p>для специальности</p>
            <p>ВУС 403290 - Начальник аппаратной</p>
        </div>
      </div>

      <BrowserRouter>
        <Route path = "/" component = {ModuleMenu} />
      </BrowserRouter>

      <Nav />
    </section>
  );
}

export default App;
