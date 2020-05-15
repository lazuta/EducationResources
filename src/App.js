import React from 'react';

import ModuleMenu from './Menu/ModuleMenu';
import {Route, BrowserRouter} from 'react-router-dom';
import { Lines } from 'react-preloaders';

import imgBg from './images/bg.jpg';
import imgLogo from './images/bsac_logo.png';

import Nav from './Menu/Nav';
import Program from './Module/Program';
import Gallery from './Module/Gallery';
import Practice from './Module/Practice';
import Control from './Module/Control';
import Materials from './Module/Materials';
import Questions from './Module/Questions';
import PowerBy from './Module/PowerBy';

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
  backgroundRepeat: "no-repeat"
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

      <a className = "by" href = "/PowerBy">BY</a>

      <Lines 
        background = '#20232A'
        color = 'white'
        time = { 1000 }
      />

      <BrowserRouter>
        <Route exact path = "/" component = {ModuleMenu} />

        <Route path = "/program" component = {Program} />
        <Route path = "/gallery" component = {Gallery} />
        <Route path = "/practice" component = {Practice} />
        <Route path = "/control" component = {Control} />
        <Route path = "/materials" component = {Materials} />
        <Route path = "/questions" component = {Questions} />
        <Route path = "/PowerBy" component = {PowerBy} />
        
      </BrowserRouter>
      <Nav />
    </section>
  );
}

export default App;
