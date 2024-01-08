import React, { useState } from 'react';
import './slideShow.scss';
import aboutBanner from '../../assets/background.jpg';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function SlideShow(props) {
  const pictures = props.pictures;
  const [currentPicture, setCurrentPicture] = useState(0);

  const getClassName = (index) => {
    return index === currentPicture ? "show" : "";
  };

  const moveToNext = () => {
    setCurrentPicture((currentPicture + 1) % pictures.length);
  };

  const moveToPrevious = () => {
    setCurrentPicture(currentPicture === 0 ? pictures.length - 1 : currentPicture - 1);
  };

  const isPicturesAvailable = () => {
    return pictures && pictures.length > 0;
  };

  const getCarouselorImgDefault = () => {
    if (!isPicturesAvailable()) {
      return <img src={aboutBanner} alt="Default banner" className='show' />;
    }
    return pictures.map((pic, index) => (
      <img key={index} src={pic} alt={`Slide ${index + 1}`} className={getClassName(index)} />
    ));
  };

  return (
    <div className='image__banner_img'>
      <div className="image__container">
        {getCarouselorImgDefault()}
      </div>
      {isPicturesAvailable() && (
        <>
          {pictures.length > 1 && (
            <>
              <button className='btn btn-previous' onClick={moveToPrevious}>
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
              <span className='slide__counter'>
                {currentPicture + 1} / {pictures.length}
              </span>
              <button className='btn btn-next' onClick={moveToNext}>
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </>
          )}
        </>
      )}
    </div>
  );
}
