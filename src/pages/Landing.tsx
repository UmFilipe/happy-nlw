import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

import "../styles/pages/landing.css";

import LogoImg from '../images/Logo.svg'


function Landing() {
    <div id="page-landing">
      <div className="content-wrapper">
        <img src={LogoImg} alt="Happy"/>

        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>

          <div className="location">
            <strong>Xanxerê</strong>
            <span>Santa Catarina</span>
          </div>

          <a href="" className="enter-app">
            <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
          </a>
        </main>
      </div>
    </div>
} 

export default Landing;