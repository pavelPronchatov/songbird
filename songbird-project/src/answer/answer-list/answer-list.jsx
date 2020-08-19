import React from 'react';
import './answer-list-style.scss';
import { useState } from 'react';
import { useEffect } from 'react';



const AnswerList = (props) => {
  const {dataList, handleUserAnswerInfo, randomBirdItem, updateAnswer, level} = props;
  const [answerState, setAnswerState] = useState(new Array(6));
  console.log('asda',dataList);
  let arrAnswer = [...answerState];
  
  useEffect(() => {
    if (level > 0) {
      setAnswerState(new Array(6));
    }
  }, [level])

  const aswerItem = dataList.map((el, index) => 
    <li className="answer-list__item"
      key={index}
      data-name={el.name}
      onClick={() => {
        handleUserAnswerInfo(el);
        if (el.name === randomBirdItem.name) {
          arrAnswer[index] = true;
          updateAnswer(true);
          console.log(arrAnswer);
          setAnswerState(arrAnswer);
        } else {
          arrAnswer[index] = false;
          console.log(arrAnswer);
          setAnswerState(arrAnswer);
        }
        }
      }
      >
      <span className={answerState[index] === undefined ? 'answer-list__btn' : answerState[index] === true ? 'answer-list__btn answer-btn--success' : 'answer-list__btn answer-btn--wrong'}></span>
      {el.name} 
    </li>
  )

  return (
    <ul className='answer-list'>
      {aswerItem}
    </ul>
  );
}

export default AnswerList;