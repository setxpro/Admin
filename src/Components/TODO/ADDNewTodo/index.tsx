import React, { useState, KeyboardEvent } from 'react';
import { PropAddTodo } from '../../../Types';

import { Container } from './styles';

const ADDNewTodo: React.FC<PropAddTodo> = ({ onEnter }) => {

    const [inputValue, setInputValue] = useState('');

    function handleKeyUp(e: KeyboardEvent) {
        if (e.code === 'Enter' && inputValue !== '') {
            onEnter(inputValue);
            setInputValue('');
        }
    }

  return (
      <Container>
          <span>✛</span>
          <input 
            type="text" 
            name="" 
            placeholder='Add a nwe task...'
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
            onKeyUp={handleKeyUp}
          />
      </Container>
  );
}

export default ADDNewTodo;