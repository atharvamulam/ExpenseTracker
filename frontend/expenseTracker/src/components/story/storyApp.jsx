import React from 'react';
import Card from './card';
import './App.css';
import TextComponent from './textComp';
import ProgressBar from './progressBar';
import { RecoilRoot } from 'recoil';
import MoneyBar from './moneyBar';

const storyApp = () => {
  return (
    <RecoilRoot>
      <div className="App d-flex flex-column justify-content-end vh-100 p-3">
        <ProgressBar />
        <MoneyBar />
        <TextComponent text="FINANCE MADE EASY!" />
        <Card />
      </div>
    </RecoilRoot>
  );
}

export default storyApp;
