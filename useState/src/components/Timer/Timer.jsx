import React, { useState } from 'react';
import Button from '../Button/Button';
import './timer.css';

export default function Timer() {

  const [clock, setClock] = useState('TIME');
  let time = new Date().toLocaleTimeString();

  const updateTime = () => {
    setClock(time);
  }

  return (
    <div className='container'>
      <h2 className='textClock'>{clock}</h2>
      <Button onClick={updateTime}>GET TIME</Button>
    </div>
  )
}
