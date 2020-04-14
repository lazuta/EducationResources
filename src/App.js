import React from 'react';

import ModuleMenu from './Menu/ModuleMenu';
import {Route, BrowserRouter} from 'react-router-dom';

import imgBg from './images/bg.jpg';
import imgLogo from './images/bsac_logo.png';

import Nav from './Menu/Nav';
import Program from './Module/Program';
import Theory from './Module/Theory';
import Practice from './Module/Practice';
import Control from './Module/Control';
import Materials from './Module/Materials';

import Vvedenie1 from './Material/Vvedenie1/Vvedenie1';



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
        <Route path = "/program" component = {Program} />
        <Route path = "/theory" component = {Theory} />
        <Route path = "/practice" component = {Practice} />
        <Route path = "/control" component = {Control} />
        <Route path = "/materials" component = {Materials} />

        {/* Materials */}
        <Route path = "/Material/Vvedenie1" component = {Vvedenie1} />
      </BrowserRouter>

      <Nav />
    </section>
  );
}

export default App;
