import React, { useState } from 'react';
import './collapse.scss';

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
        <i className={isShow ? "chevron down" : "chevron up"}></i>
      </p>
      {isShow && <p className={contentClass}>{props.content}</p>}
    </div>
  );
}
