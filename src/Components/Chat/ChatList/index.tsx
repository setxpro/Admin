import React from 'react';
import { ChatListProps } from '../../../Types';

import * as C from './styles';

interface Props {
    setActiveChat: () => void;
    active: boolean | number;
    title: string;
    avatar: string;
    message: string;
}

const ChatList: React.FC<Props> = ({ setActiveChat, active, title, avatar, message }) => {


  return (
      <C.Container onClick={setActiveChat} mode={active}>
        <C.ContentImage>
            <img src={avatar} alt=""/>
        </C.ContentImage>
        <C.ChatListLines>
            <C.ChatListLine>
                <h3>{title}</h3>
                <span>19:00</span>
            </C.ChatListLine>
            <C.ChatListLine>
                <p>{message}</p>
            </C.ChatListLine>
        </C.ChatListLines>
      </C.Container>
  );
}

export default ChatList;