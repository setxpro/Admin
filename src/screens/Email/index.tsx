import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Messages from '../../Components/Email';
import { EmailDb } from '../../Components/Email/emailItemsDb';

import * as C from './styles';

const Email: React.FC = () => {

    const [inputValue, setInputValue] = useState('');
    const inputFilter = EmailDb.filter(message => message.name.startsWith(inputValue));

  return (
      <C.Container>
          <C.ContentSidebarActions>
                <C.ContentButton>
                    <button>Compose</button>
                </C.ContentButton>
                <ul>
                    <Link to="">Inbox</Link>
                    <Link to="">Sent</Link>
                    <Link to="">Draft</Link>
                    <Link to="">Starred</Link>
                    <Link to="">Span</Link>
                    <Link to="">Trash</Link>
                </ul>
          </C.ContentSidebarActions>
          
            <C.ContentRight>
                <C.ContentSearch>
                <C.InputArea>
                        <input 
                            type="text" 
                            name="search" 
                            placeholder='Search' 
                            maxLength={20}
                            value={inputValue}
                            onChange={e => setInputValue(e.target.value)}
                        />
                </C.InputArea>
                <C.SelectArea>
                        <input type="checkbox" name='checkbox'/>
                        <label>Select All</label>
                </C.SelectArea>
                </C.ContentSearch>
                <C.ContentMessage>
                    {inputFilter.map((message, index) => (
                            <Messages
                                key={index}
                                id={message.id}
                                name={message.name}
                                description={message.description}
                                subject={message.subject}
                                avatar={message.avatar}
                                date={message.date}
                            />
                    ))}
                    
                </C.ContentMessage>
            </C.ContentRight>

      </C.Container>
  );
}

export default Email;