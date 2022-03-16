import React, { useState } from 'react';
import Button from '../Button/Button';
import './city.css'

export default function City() {

  const profile = {
    city: 'Valladolid',
    country: 'España'
  }

  const [ isCity, setIsCity ] = useState(false);
  const [ city, setCity ] = useState('Hello');
  const [ textButton, setTextButton] = useState('Pais')

  const handleCity = () => {
    setCity(isCity ? profile.city : profile.country);
    setIsCity(!isCity);
    setTextButton(isCity ? 'Ciudad' : 'Pais')
  }

  return (
    <div>
      <h2>{city}</h2>
      <Button onClick={handleCity} className="cityButton">{textButton}</Button>
    </div>
  )
}
