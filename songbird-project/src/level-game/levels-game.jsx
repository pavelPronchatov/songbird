import React from 'react';
import './lavels-game-styles.scss';

const LevelsGame = (props) => {
  const {level} = props;
  const arrLevel = ['Разминка', 'Воробьиные', 'Лесные птицы', 'Певчие птицы', 'Хищные птицы', 'Морские птицы'];
  return (
    <div className='levels-game'>
      {
        arrLevel.map((el, index) => {
          return (
            <button key={index} className={level === index ? 'levels-game__item levels-game__item--active' : 'levels-game__item'}>{el}</button>
          )
        })
      }
    </div>
  )
}

export default LevelsGame;