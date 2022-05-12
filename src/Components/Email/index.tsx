import React from 'react';

import * as C from './styles';

interface MessageProps {
    id: number;
    name: string;
    description: string;
    subject: string;
    avatar: string;
    date: string;
}

const Messages: React.FC<MessageProps> = ({ id, name, description, subject, avatar, date }) => {
  return (
    <C.Container>
        <C.ContentTop  to={`/${id}`}>
            <C.ContentImage>
                <img src={avatar} alt="avatar"/>
            </C.ContentImage>
            <C.ContentNameInfo>
                <h2>{name}</h2>
                <h4>{description}</h4>
            </C.ContentNameInfo>
            <p>{date}</p>
        </C.ContentTop>
        <C.ContentBottom>
            <input type="checkbox" name="checkbox"/>
            <p>{subject}</p>
        </C.ContentBottom>
    </C.Container>
  );
}

export default Messages;