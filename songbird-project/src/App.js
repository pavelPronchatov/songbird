import React, { useState, useCallback, useEffect } from 'react';
import './App.scss';
import birdsData from './birdsData';
import Header from './Header/Header';
import LevelsGame from './level-game/levels-game';
import RandomBird from './word/randomBird';
import Answer from './answer/answer';


const randomInt = (min, max) => {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

function App() {
  let [level, setLevel] = useState(0);
  const traine = birdsData[level];
  const [userAnswer, setAnswer] = useState('');
  const [userScore, setUserScore] = useState(0);
  const [allScore, setAllScore] = useState(0);
  const [randomBirdItem, setRandomBirdItem] = useState(traine[randomInt(0, 5)]);


  useEffect( () => {
    if (level) {
      setRandomBirdItem(traine[randomInt(0, 5)]);
    }
  }, [level]) 


  const updateAnswer = useCallback((value) => {
    setAnswer(value);
  }, [])

  const updateScore = useCallback((value) => {
    setUserScore(value);
    setAllScore(allScore + value);
    console.log(allScore);
    console.log(value);
  })

  const handleLevel = () => {
    setLevel(++level);
    console.log(level);
    if (level > 0) {
      setAnswer(false);
    }
  }

  return (
    <div className='container'>
      <Header allScore={allScore}/>
      <LevelsGame level={level}/>
      <RandomBird randomBirdItem={randomBirdItem} userAnswer={userAnswer}/>
      <Answer level={level} dataList={traine} randomBirdItem={randomBirdItem} updateAnswer={updateAnswer} updateScore={updateScore}/>
      <button className='next-level' 
        onClick={handleLevel} disabled={userAnswer ? false : true}>Next Level</button>
    </div>
  );
}

export default App;
