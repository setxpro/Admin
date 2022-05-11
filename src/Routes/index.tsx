import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Analytics from '../screens/Dashboard/Analytics';
import Ecommerce from '../screens/Dashboard/Ecommerce';

// import { Container } from './styles';

const SidebarRoutes: React.FC = () => {
  return (
      <Routes>
          <Route path="/" element={<Analytics/>}/>
          <Route path="/ecommerce" element={<Ecommerce/>}/>
      </Routes>
  );
}

export default SidebarRoutes;