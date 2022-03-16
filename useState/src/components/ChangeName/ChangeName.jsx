import React, { useState } from 'react';
import Button from '../Button/Button';
import './changeName.css'

export default function ChangeName() {

  const contact = {
    id: 1,
    name: 'Hugo',
    lastName: 'Quintero'
  }

  const [ isName, setIsName ] = useState(false);
  const [ name, setName ] = useState(contact.name);
  const [textButton, sestTextButton] = useState('Apellido');

  const handleName = () => {
    setName(isName ? contact.name : contact.lastName);
    setIsName(!isName);
    sestTextButton(isName ? 'Apellido' : 'Nombre')

  }
  return (
    <div className='container'>
      <h2>{name}</h2>
      <Button onClick={handleName}>{textButton}</Button>
    </div>
  )
}
