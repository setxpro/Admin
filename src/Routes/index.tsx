import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SingleMessage from '../Components/Email/SingleMessage';
import Chat from '../screens/Chat';
import Analytics from '../screens/Dashboard/Analytics';
import Ecommerce from '../screens/Dashboard/Ecommerce';
import Email from '../screens/Email';
import Todo from '../screens/Todo';

const SidebarRoutes: React.FC = () => {
  return (
      <Routes>
          <Route path="/" element={<Analytics/>}/>
          <Route path="/ecommerce" element={<Ecommerce/>}/>
          <Route path="/email" element={<Email/>}/>
          <Route path="/email/:id" element={<SingleMessage/>}/>
          <Route path="/todo" element={<Todo/>}/>
          <Route path="/chat" element={<Chat/>}/>
          
      </Routes>
  );
}

export default SidebarRoutes;