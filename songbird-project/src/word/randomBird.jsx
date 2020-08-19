import React from 'react';
import './unknow-word.scss';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';






const RandomBird = (props) => {
  const {randomBirdItem, userAnswer} = props;

  return (
    
    <div className='random-bird'>
      <img src={userAnswer === true ? randomBirdItem.image : 'img/random-bird.jpg'} alt="" className="random-bird__bird-img"/>
      <div className="random-bird__info-bird">
      <h4 className="info-bird__title">{userAnswer === true ? randomBirdItem.name : '***********'}</h4>
        <AudioPlayer
        showJumpControls={false}
        showDownloadProgress={false} 
        customAdditionalControls={[]}
        layout="horizontal-reverse"
        src={randomBirdItem.audio}
        autoPlayAfterSrcChange={false}/>
      </div>
    </div>
  );
}

export default RandomBird;