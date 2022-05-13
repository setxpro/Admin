import React, { useState, useEffect, useRef } from 'react';
import { Donut, More, NewChat } from '../../../screens/Chat/styles';

import EmojiPicker  from 'emoji-picker-react';

import * as C from './styles';
import MessageItem from '../MessageItem';

export interface IEmojiData {
  unified: string;
  originalUnified: string;
  names: Array<string>;
  emoji: string;
}

interface UserProps {
  user: {
    id: number;
    avatar: string;
    name: string;
  };
}

const ChatWindow: React.FC<UserProps> = ({user}) => {

  // let recognition = null;
  // let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  //   if(SpeechRecognition !== undefined) {
  //       recognition = new SpeechRecognition();
  //   }

  const body = React.useRef<HTMLDivElement>(null);

  const [text, setText] = useState('');
  const [emojiOpen, setEmojiOpen] = useState(false);

  const [message, setMessage] = useState([
    {author: 'Cicrano', body: 'bla bal'},
    {author: 'Patrick Anjos', body: 'bla bla bla'},
    {author: 'Cicrano', body: 'bla bal'},
    {author: 'Patrick Anjos', body: 'bla bla bla'},
    {author: 'Cicrano', body: 'bla bal'},
    {author: 'Patrick Anjos', body: 'bla bla bla'},
    {author: 'Cicrano', body: 'bla bal'},
    {author: 'Patrick Anjos', body: 'bla bla bla'},
    {author: 'Cicrano', body: 'bla bal'},
    {author: 'Patrick Anjos', body: 'bla bla bla'},
    {author: 'Cicrano', body: 'bla bal'},
    {author: 'Patrick Anjos', body: 'bla bla bla'},
    {author: 'Cicrano', body: 'bla bal'},
    {author: 'Patrick Anjos', body: 'bla bla bla'},
    {author: 'Cicrano', body: 'bla bal'},
    {author: 'Patrick Anjos', body: 'bla bla bla'},
    {author: 'Cicrano', body: 'bla bal'},
    {author: 'Patrick Anjos', body: 'bla bla bla'},
    {author: 'Cicrano', body: 'bla bal'},
    {author: 'Patrick Anjos', body: 'bla bla bla'},
    {author: 'Cicrano', body: 'bla bal'},
    {author: 'Patrick Anjos', body: 'bla bla bla'},
    {author: 'Cicrano', body: 'bla bal'},
    {author: 'Patrick Anjos', body: 'bla bla bla'},
    {author: 'Cicrano', body: 'bla bal'},
    {author: 'Patrick Anjos', body: 'bla bla bla'},
    {author: 'Cicrano', body: 'bla bal'},
    {author: 'Patrick Anjos', body: 'bla bla bla'},
    {author: 'Cicrano', body: 'bla bal'},
    {author: 'Patrick Anjos', body: 'bla bla bla'},
    {author: 'Cicrano', body: 'bla bal'},
    {author: 'Patrick Anjos', body: 'bla bla bla'},
    {author: 'Cicrano', body: 'bla bal'},
    {author: 'Patrick Anjos', body: 'bla bla bla'},
    {author: 'Cicrano', body: 'bla bal'},
    {author: 'Patrick Anjos', body: 'bla bla bla'},
    {author: 'Cicrano', body: 'bla bal'},
    {author: 'Patrick Anjos', body: 'bla bla bla'},
  ]);

  // useEffect(() => {
     
  //     if (body.current?.scrollHeight > body.current?.offsetHeight) {
  //         body.current?.scrollTop = body.current?.scrollHeight - body.current?.offsetHeight;
  //     }
  // }, [message])

  function handleEmojiClick(event: React.MouseEvent, emojiObject: IEmojiData) {
    setText(text + emojiObject.emoji)
  }

  function handleOpenEmojiArea(){
    setEmojiOpen(true);
  }
  function handleCloseEmojiArea() {
    setEmojiOpen(false);
  }

  function handleSend() {

  }

  function handleListen() {

  }

  return (
      <C.Container>
          <C.ChatWindowHeader>
             <C.ChatWindowHeaderInfo>
                <img src="https://pixinvent.com/demo/vuexy-react-admin-dashboard-template/demo-4/static/media/1.6a7d13c0.png" alt=""/>
                <h3>Tracie</h3>
             </C.ChatWindowHeaderInfo>
              <C.ChatWindowHeaderButtons>
                  <div>
                      <Donut/> 
                      <NewChat/> 
                      <More/>
                  </div>
              </C.ChatWindowHeaderButtons>
          </C.ChatWindowHeader>

          <C.ChatWindowBody ref={body}>
            {message.map((item, index) => (
                <MessageItem
                  key={index}
                  body={item.body}
                  author={item.author}
                  user={user}
                />
            ))}
          </C.ChatWindowBody>

          <C.EmojiArea emojiOpen={emojiOpen}>
          
          <EmojiPicker
            disableSearchBar
            disableSkinTonePicker
            onEmojiClick={handleEmojiClick}
          />
          </C.EmojiArea>

          <C.ChatWindowFooter>
              <C.ChatWindowFooterLeft>
                {emojiOpen ? <C.CloseEmoji onClick={handleCloseEmojiArea}/> : <C.Emoji onClick={handleOpenEmojiArea}/>}
              </C.ChatWindowFooterLeft>
              <C.ChatWindowFooterInput>
                <input 
                  type="text" 
                  name="message" 
                  placeholder='Your Message...'
                  value={text}
                  onChange={e => setText(e.target.value)}
                />
              </C.ChatWindowFooterInput>
              <C.ChatWindowFooterRight>
              {text === '' ? <C.MicIcon onClick={handleListen}/> : <C.SendIcon onClick={handleSend}/>}
              </C.ChatWindowFooterRight>
          </C.ChatWindowFooter>
      </C.Container>
  );
}

export default ChatWindow;