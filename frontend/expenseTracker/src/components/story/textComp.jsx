import React, { useState, useEffect } from 'react';
import './textComp.css';
import { stateAtom, isVisibleAtom } from './atom';
import { useRecoilState } from 'recoil';
import { data } from './atom';

const TextComponent = () => {
  const [val, setVal] = useRecoilState(stateAtom);
  const [isVisible, setIsVisible] = useRecoilState(isVisibleAtom);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [val]);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="text-card">
      <div className="card-body">
        <p className="text-center mb-0">{data[val].desc}</p>
      </div>
    </div>
  );
}

export default TextComponent;
