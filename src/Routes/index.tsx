import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SingleMessage from '../Components/Email/SingleMessage';
import Analytics from '../screens/Dashboard/Analytics';
import Ecommerce from '../screens/Dashboard/Ecommerce';
import Email from '../screens/Email';

const SidebarRoutes: React.FC = () => {
  return (
      <Routes>
          <Route path="/" element={<Analytics/>}/>
          <Route path="/ecommerce" element={<Ecommerce/>}/>
          <Route path="/email" element={<Email/>}/>
          <Route path="/email/:id" element={<SingleMessage/>}/>
      </Routes>
  );
}

export default SidebarRoutes;