import React from 'react';
import SidebarRoutes from '../../Routes';
import Layout from '../Layout';
import MenuMobile from '../MenuMobile';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';

import { Container } from './styles';

interface Props {
  toggleTheme: () => void;
}

const Main: React.FC<Props> = ({toggleTheme}) => {
  return (
      <Container>
        <Sidebar/>
            <Layout>
                <Navbar toggleTheme={toggleTheme}/>
                <MenuMobile/>
                <SidebarRoutes/>
            </Layout>
      </Container>
  );
}

export default Main;