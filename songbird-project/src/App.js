import React, { useState, useCallback, useEffect, useRef } from 'react';
import './App.scss';
import birdsData from './birdsData';
import Header from './Header/Header';
import LevelsGame from './level-game/levels-game';
import RandomBird from './word/randomBird';
import Answer from './answer/answer';
import ResultGame from './result-game/result-game'


const randomInt = (min, max) => {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

function App() {
  let [level, setLevel] = useState(0);
  let traine = birdsData[level];
  const [userAnswer, setAnswer] = useState('');
  const [userScore, setUserScore] = useState(0);
  const [allScore, setAllScore] = useState(0);
  const [activeAnswerData, setactiveAnswerData] = useState(null);
  const audioCorrect = useRef();
  const audioError = useRef();
  

    if (level === 6) {
      traine = birdsData[0];
    }

  const [randomBirdItem, setRandomBirdItem] = useState(traine[randomInt(0, 5)]);


  useEffect( () => {
    if (level) {
      setRandomBirdItem(traine[randomInt(0, 5)]);
    }
  }, [level]) 


  const updateAnswer = useCallback((value) => {
    setAnswer(value);
  }, [])

  const updateActiveAnswerData = useCallback((value) => {
    setactiveAnswerData(value);
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
      setactiveAnswerData(null);
    }
  }

  return (
    <div className='container'>
      <Header allScore={allScore}/>
      <LevelsGame level={level}/>
      <div style={{ display: level === 6 ? 'flex' : 'none'}}>
      <ResultGame allScore={allScore} />
      </div>
      
      <RandomBird randomBirdItem={randomBirdItem} userAnswer={userAnswer}/>
      <Answer 
        level={level}
        dataList={traine}
        randomBirdItem={randomBirdItem}
        updateAnswer={updateAnswer}
        updateScore={updateScore}
        audioCorrect={audioCorrect}
        audioError={audioError}
        updateActiveAnswerData={updateActiveAnswerData}
        activeAnswerData={activeAnswerData}
        />
      <button className={userAnswer ? 'next-level next-level--green' : 'next-level'} 
        onClick={handleLevel} disabled={userAnswer ? false : true}>Next Level</button>


      <audio ref={audioCorrect} src='correct.mp3' className='correct-audio'></audio>
      <audio ref={audioError} src='error.mp3' className='error-audio'></audio>
    </div>


  );
}

export default App;
