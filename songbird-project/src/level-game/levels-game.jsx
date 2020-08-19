import React from 'react';
import './lavels-game-styles.scss';

const LevelsGame = (props) => {
  const {level} = props;
  return (
    <div className='levels-game'>
      <button className={level === 0 ? 'levels-game__item levels-game__item--active' : 'levels-game__item'}>Разминка</button>
      <button className={level === 1 ? 'levels-game__item levels-game__item--active' : 'levels-game__item'}>Воробьиные</button>
      <button className={level === 2 ? 'levels-game__item levels-game__item--active' : 'levels-game__item'}>Лесные птицы</button>
      <button className={level === 3 ? 'levels-game__item levels-game__item--active' : 'levels-game__item'}>Певчие птицы</button>
      <button className={level === 4 ? 'levels-game__item levels-game__item--active' : 'levels-game__item'}>Хищные птицы</button>
      <button className={level === 5 ? 'levels-game__item levels-game__item--active' : 'levels-game__item'}>Морские птицы</button>
    </div>
  )
}

export default LevelsGame;