import React from 'react';
import { TotalSalesDb, UserLogged } from '../../../Components/Analytics/AnalyticsDb';
import AvgSessions from '../../../Components/Analytics/AvgSessions';
import InfoEmployeer from '../../../Components/Analytics/InfoEmployeer';
import CongratulationsMessage from '../../../Components/Analytics/MessageCongratulations';
import OrdersReceived from '../../../Components/Analytics/OrdersReceived';
import SubscribersGained from '../../../Components/Analytics/SubscribersGained';
import SupportTracker from '../../../Components/Analytics/SupportTracker';

import * as C from './styles';

const Analytics: React.FC = () => {
  return (
    <C.Container>
      <C.ContentMessageSubscriberOrder>
  
        {TotalSalesDb.map((item, index) => (
            <CongratulationsMessage
              key={index}
              sales={item.salesPercent}
              name={item.name}
            />
        ))}
        <SubscribersGained/>
        {UserLogged.map((item, index) => (
          <InfoEmployeer
          key={index}
          name={item.name}
          occupation={item.occupation}
          avatar={item.avatar}
          />

        ))}
        <OrdersReceived/>
      </C.ContentMessageSubscriberOrder>

      <C.ContentAvgSupport>
        <AvgSessions/>
        <SupportTracker/>
      </C.ContentAvgSupport>
      <div>
      {/** User Timeline */}
      {/** Sales*/}
      {/** App design*/}
      </div>
      <div>
        {/** Table */}
      </div>
    </C.Container>
  );
}

export default Analytics;