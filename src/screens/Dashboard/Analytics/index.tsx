import React from 'react';
import { TotalSalesDb, UserLogged } from '../../../Components/Analytics/AnalyticsDb';
import Appdesign from '../../../Components/Analytics/Appdesign';
import AvgSessions from '../../../Components/Analytics/AvgSessions';
import InfoEmployeer from '../../../Components/Analytics/InfoEmployeer';
import CongratulationsMessage from '../../../Components/Analytics/MessageCongratulations';
import OrdersReceived from '../../../Components/Analytics/OrdersReceived';
import Sales from '../../../Components/Analytics/Sales';
import SubscribersGained from '../../../Components/Analytics/SubscribersGained';
import SupportTracker from '../../../Components/Analytics/SupportTracker';
import Table from '../../../Components/Analytics/Table';
import UserTimeline from '../../../Components/Analytics/UserTimeline';

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

      <C.ContainerTimeLineUserDesign>
        <UserTimeline/>
        <Sales/>
        <Appdesign/>
      </C.ContainerTimeLineUserDesign>
      <C.ContainerTable>
        <Table/>
      </C.ContainerTable>
    </C.Container>
  );
}

export default Analytics;