import React from 'react';
import './answer-info-style.scss';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';


const AnswerInfo = (props) => {
  const {activeAnswerData} = props;


  const isActiveAnswer = () => {
    if (activeAnswerData === null) {
      console.log(activeAnswerData);
      return (
        <div className="answer-info--no-info" style={{display: 'flex'}}>
          <span>Послушайте плеер.</span>
          <span>Выберите птицу из списка</span>
        </div>
      )
    } else {
      return (
        <div className="answer-info__wrapper">
          <div className="answer-info__content">
            <img src={activeAnswerData.image} alt="" className="answer-info__img"/>
            <div className="answer-info__titles">
              <h4 className="titles__title">{activeAnswerData.name}</h4>
              <div className="titles__type-bird">{activeAnswerData.species}</div>
              <AudioPlayer
                showJumpControls={false}
                showDownloadProgress={false} 
                customAdditionalControls={[]}
                customVolumeControls={[]}
                layout="horizontal-reverse"
                src={activeAnswerData.audio}
                autoPlayAfterSrcChange={false}
              />
            </div>
          </div>
          <p className="answer-info__desc">{activeAnswerData.description}</p>
        </div>
      )
    }
  }
  return (
    <div className='answer-info'>
      {isActiveAnswer()}
    </div>
  );
}

export default AnswerInfo;