import React, { useState, useEffect } from 'react';
import './card.css';
import { stateAtom, isVisibleAtom } from './atom';
import { useRecoilState } from 'recoil';
import { data } from './atom';
import { IconBoxFill } from './iconBox';

const Card = () => {
  const [val, setVal] = useRecoilState(stateAtom);
  const [isVisible, setIsVisible] = useRecoilState(isVisibleAtom);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 2500);

    return () => {
      clearTimeout(timeout);
    };
  }, [isVisible]);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="card w-100">
      <div className="icon-container">
        <IconBoxFill height="1em" width="2em" fill="black"></IconBoxFill>
      </div>
      <div className="card-body d-flex">
        <div className="info-section w-25">
          <p className="text-center">{data[val].exp1}</p>
        </div>
        <div className="middle-section w-50 d-flex flex-column">
          <div className="d-flex justify-content-center mb-3">
            <label type="text" className="form-control" placeholder="Enter your question">
              {data[val].mcq}
            </label>
          </div>
          <div className="d-flex justify-content-center mt-auto">
            <button
              className="btn btn-primary mr-2"
              onClick={() => {
                setVal(data[val].i1);
                setIsVisible(false);
              }}
            >
              {data[val].ans1}
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => {
                setVal(data[val].i2);
                setIsVisible(false);
              }}
            >
              {data[val].ans2}
            </button>
          </div>
        </div>
        <div className="info-section w-25 text-center">
          <p>{data[val].exp2}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
