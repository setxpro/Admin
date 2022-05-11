import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AttachMoney, ChatIcon, ClientIcon, CommerceIcon, EmployeesIcon, MailIcon, PageIcon, TodoIcon } from '../../icons/sidebarIcons';
import Dashboard from '../../screens/Dashboard';
import { EcommerceItems } from '../../screens/Dashboard/Ecommerce/EcommerceItems';
import EcommerceDropdown from '../Dropdown/EcommerceDropdown';

import { Container, Title } from './styles';

const Sidebar: React.FC = () => {

  const [openDropdown, setOpenDropdown] = useState(false);
  const wrapperDrop = () => setOpenDropdown(!openDropdown);

  return (
      <Container openDropdown={openDropdown}>
         <Title>
          <h3>Your Make</h3>
         </Title>
          <nav>
              <ul>
                <Dashboard/>
                <p>Apps & Pages</p>
                <div className='content'>
                  <Link to="/todo">
                    <TodoIcon/>
                    <li>Todo</li>
                  </Link>
                  <Link to="/chat">
                    <ChatIcon/>
                    <li>Chat</li>
                  </Link>
                  <Link to="/email">
                    <MailIcon/>
                    <li>Email</li>
                  </Link>
                  <Link to="/pages">
                    <PageIcon/>
                    <li>Pages</li>
                  </Link>
                  <Link to="#" onClick={wrapperDrop}>
                    <CommerceIcon/>
                    <li>E-commerce</li>
                  </Link>
                  <div className={openDropdown ? 'select' : 'none'}>
                    {EcommerceItems.map((item, index) => (
                      <EcommerceDropdown
                        key={index}
                        ecommerce={item.ecommerce}
                        link={item.link}
                      />
                    ))}
                  </div>
                  <Link to="/clients">
                    <ClientIcon/>
                    <li>Clients</li>
                  </Link>
                  <Link to="/employees">
                    <EmployeesIcon/>
                    <li>Employees</li>
                  </Link>
                  <Link to="/finances">
                    <AttachMoney/>
                    <li>Finances</li>
                  </Link>
                </div>
              </ul>
          </nav>
      </Container>
  );
}

export default Sidebar;