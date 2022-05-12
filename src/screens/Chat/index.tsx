import React, { useState } from 'react';
import ChatIntro from '../../Components/Chat/ChatIntro';
import ChatList from '../../Components/Chat/ChatList';
import ChatWindow from '../../Components/Chat/ChatWindow';

import * as C from './styles';

const Chat: React.FC = () => {

    const [chatList, setChatList] = useState([
        {chatId: 1, title: 'Tressa Gass', avatar: 'https://pixinvent.com/demo/vuexy-react-admin-dashboard-template/demo-4/static/media/2.c8691d67.png', message: 'Hey How are you ?'},
        {chatId: 2, title: 'Dalila Ouldcott', avatar: 'https://pixinvent.com/demo/vuexy-react-admin-dashboard-template/demo-4/static/media/1.6a7d13c0.png', message: 'Goode Morning!!'},
        {chatId: 3, title: 'Louetta Esses', avatar: 'https://pixinvent.com/demo/vuexy-react-admin-dashboard-template/demo-4/static/media/4.4bfb7963.png', message: 'Hey Bro, whats are you doing today ?'},
    ]);

    const [activeChat, setActiveChat] = useState({
        chatId: 1,
        avatar: '',
        title: ''

    });

  return (
      <C.Container>
        <C.SidebarChat>
            <header>
                <img src="https://github.com/setxpro.png" alt="avatar"/>
                <div>
                    <C.Donut/> 
                    <C.NewChat/> 
                    <C.More/>
                </div>
            </header>
            <C.ContentSearchArea>
                <div>
                    <C.Search/>
                    <input type="search" name="search" placeholder='Search a new conversation...'/>
                </div>
            </C.ContentSearchArea>

            <C.ContentChatListArea>
                {chatList.map((item, index) => (
                    <ChatList
                        key={index}
                        title={item.title}
                        avatar={item.avatar}
                        message={item.message}
                        active={activeChat.chatId === chatList[index].chatId}
                        setActiveChat={() => setActiveChat(chatList[index])}
                    />
                ))}
            </C.ContentChatListArea>
        </C.SidebarChat>

        <C.ContentChatArea>
            {activeChat !== undefined && <ChatWindow/>}
            {activeChat === undefined && <ChatIntro/>}
        </C.ContentChatArea>
      </C.Container>
  );
}

export default Chat;