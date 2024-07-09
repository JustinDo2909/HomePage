import React from 'react';
import videoSrc from '../../asset/main.mp4'
import './Silder.scss'

const SliderComponent = () => {

  return (
    <div className='bannerStyle'>
      <video
        className='videoStyle'
        src={videoSrc} autoPlay loop muted />
    </div>
  );
};




export default SliderComponent;
