import React from 'react';
import { Donut, More, NewChat } from '../../../screens/Chat/styles';

import * as C from './styles';

const ChatWindow: React.FC = () => {
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

          <C.ChatWindowBody></C.ChatWindowBody>

          <C.ChatWindowFooter>
              <C.ChatWindowFooterLeft></C.ChatWindowFooterLeft>
              <C.ChatWindowFooterInput></C.ChatWindowFooterInput>
              <C.ChatWindowFooterRight></C.ChatWindowFooterRight>
          </C.ChatWindowFooter>
      </C.Container>
  );
}

export default ChatWindow;