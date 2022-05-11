import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChartIcon } from '../../icons/sidebarIcons';

import { Container } from './styles';

const Dashboard: React.FC = () => {

    const [wrapper, setWrapper] = useState(false);
    const openWrapper = () => setWrapper(!wrapper);

    const [analyticsState, setAnalyticsState] = useState(true);
    const [ecommerceState, setEcommerceState] = useState(false);

    const toggleEcommerce = () => {
        setEcommerceState(true);
        setAnalyticsState(false);
      }
      const toggleAnalytics = () => {
        setAnalyticsState(true);
        setEcommerceState(false);
    
      }

  return (
      <Container wrapper={wrapper}>
          <li>
            <ChartIcon/>
            <button onClick={openWrapper}>Dashboard</button>
          </li>
          <div>
            <Link to="/" onClick={toggleAnalytics}>
            <li  className={analyticsState === true ? 'active' : ''}>
                <span></span>
                Analytics
            </li>
            </Link>
            <Link to="/ecommerce" onClick={toggleEcommerce}>
            <li className={ecommerceState === true ? 'active' : ''}>
                <span></span>
                E-Commerce
            </li>
            </Link>
          </div>
      </Container>
  );
}

export default Dashboard;