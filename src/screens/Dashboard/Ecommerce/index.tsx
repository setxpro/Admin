import React from 'react';
import BrowserStates from '../../../Components/Ecommerce/BrowserStates';
import CongratulationsEmployer from '../../../Components/Ecommerce/CongratulationsEmployer';
import Earnings from '../../../Components/Ecommerce/Earnings';
import GoalOverview from '../../../Components/Ecommerce/GoalOverview';
import Orders from '../../../Components/Ecommerce/Orders';
import Profit from '../../../Components/Ecommerce/Profit';
import RevenueReport from '../../../Components/Ecommerce/RevenueReport';
import Statistics from '../../../Components/Ecommerce/Statistics';
import TableCompanies from '../../../Components/Ecommerce/TableCompanies';
import Transactions from '../../../Components/Ecommerce/Transactions';

import * as C from './styles';

const Ecommerce: React.FC = () => {
  return (
    <C.Container>
      <C.ContentStatistics>

        <CongratulationsEmployer/>
        <Statistics/>
        
      </C.ContentStatistics>
      <C.ContentRevenueReport>
        
        <div className='orders-profit-earnings'>
          <Orders/>
          <Profit/>
          <Earnings/>
        </div>
          <RevenueReport/>

      </C.ContentRevenueReport>
      <C.ContentTableArea>

        <TableCompanies/>

      </C.ContentTableArea>
      <C.ContentTransactions>

        <BrowserStates/>

        <GoalOverview/>

        <Transactions/>

      </C.ContentTransactions>
    </C.Container>
  );
}

export default Ecommerce;