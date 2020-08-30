import React from 'react';
import './result-game-style.scss';
import { useState } from 'react';
import { useEffect } from 'react';


const ResultGame = ({allScore}) => {

  return(
    <div className='result'>
      <h1 className="result__title">Поздравляем!</h1>
      <div className="result__subtitle">Вы прошли викторину и набрали <span>{allScore}</span> из 30 возможных баллов</div>
      <button className="result__repeat" onClick={ () => window.location.reload()}>Попробовать еще раз!</button>
    </div>
  )
}

export default ResultGame;