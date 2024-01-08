import React, { useState } from 'react';
import './collapse.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

export function Collapse(props) {
  const [isShow, setIsShow] = useState(false);

  const showContent = () => {
    setIsShow(!isShow);
  };

  const contentClass = `${isShow ? "visible" : "hidden"} collapse__content`;

  return (
    <div className='collapse__panel'>
      <p className='collapse__header' onClick={showContent}>
        <span>{props.title}</span>
        <FontAwesomeIcon icon={isShow ? faChevronDown : faChevronUp} />
      </p>
      {isShow && <p className={contentClass}>{props.content}</p>}
    </div>
  );
}
