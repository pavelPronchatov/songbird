import React from 'react';
import './answer-style.scss';
import AnswerInfo from './answer-info/answer-info';
import AnswerList from './answer-list/answer-list'
import { useState } from 'react';
import { useEffect } from 'react';

// let scoreCurrent = 5;
let isAnswer = true;
const Answer = (props) => {
  const {dataList, randomBirdItem, updateAnswer, level, updateScore} = props;
  const [activeAnswerData, setactiveAnswerData] = useState(null);// null 
  //const [birdItemActive, setBirdItemActive] = useState();
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
        setactiveAnswerData(el);
      }
    })

      if (birdItem.name === randomBirdItem.name) {
        console.log(scoreCurrent);

        if (isAnswer) {
          updateScore(scoreCurrent);
        }
        isAnswer = false;
        console.log(isAnswer);
      } else {
        if (isAnswer) {
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