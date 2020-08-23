import React from 'react';
import './answer-style.scss';
import AnswerInfo from './answer-info/answer-info';
import AnswerList from './answer-list/answer-list'
import { useState } from 'react';
import { useEffect } from 'react';

let isAnswer = true;
const Answer = (props) => {
  const {dataList, randomBirdItem, updateAnswer, level, updateScore, audioCorrect, audioError,activeAnswerData, updateActiveAnswerData} = props;
  const [scoreCurrent, setScoreCurrent] = useState(5);

  useEffect(() => {
    if (level > 0) {
      setScoreCurrent(5);
      isAnswer = true;
    }
  }, [level])
  
  const handleUserAnswerInfo = (birdItem) => {
    
    dataList.map((el) => {
      if (birdItem.name === el.name) {
        updateActiveAnswerData(el);

      }
    })

      if (birdItem.name === randomBirdItem.name) {
        console.log(scoreCurrent);
        audioCorrect.current.play();
        if (isAnswer) {
          updateScore(scoreCurrent);
        }
        isAnswer = false;
        console.log(isAnswer);
      } else {
        if (isAnswer) {
          audioError.current.play();
          console.log('mibus');
          setScoreCurrent(scoreCurrent - 1);
          console.log(scoreCurrent);
        }

        // updateScore(scoreCurrent);
      }


  }

  return (
    <div className='answer__wrapper'>
      <AnswerList level={level} randomBirdItem={randomBirdItem} dataList={dataList} handleUserAnswerInfo={handleUserAnswerInfo} updateAnswer={updateAnswer}/> 
      <AnswerInfo activeAnswerData={activeAnswerData}/>
    </div>
  );
}

export default Answer;