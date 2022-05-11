import React from 'react';

import * as C from './styles';

interface CongratulationsMessageProps {
  name: string;
  sales: number;
}

const CongratulationsMessage: React.FC<CongratulationsMessageProps> = ({name, sales}) => {
  return (
    <C.Container>
     <h2>Congratulations {name},</h2>
     <h4>You have done <strong>{sales}%</strong> more sales today. Check your new badge in your profile.</h4>
    </C.Container>
  );
}

export default CongratulationsMessage;