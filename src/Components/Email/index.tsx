import React, { useState } from 'react';

import * as C from './styles';

interface MessageProps {
    id: string | number;
    name: string;
    description: string;
    subject: string;
    avatar: string;
    date: string;
    checkedAll: boolean;
}

const Messages: React.FC<MessageProps> = ({ id, name, description, subject, avatar, date, checkedAll }) => {

    const [checked, setChecked] = useState(false);
    
    function handleCheckboxChange(){
        setChecked(!checked);
    }

  return (
    <C.Container>
        <C.ContentTop  to={`/email/${id}`}>
            <C.ContentImage>
                <img src={avatar} alt="avatar"/>
            </C.ContentImage>
            <C.ContentNameInfo>
                <h2>{name}</h2>
                <h4>{description}</h4>
            </C.ContentNameInfo>
            <p>{date}</p>
        </C.ContentTop>
        <C.ContentBottom>
            <button onClick={handleCheckboxChange}>{(checked && <C.CheckedIcon/>) || (checkedAll && <C.CheckedIcon/>)}</button>
            <p>{subject}</p>
        </C.ContentBottom>
    </C.Container>
  );
}

export default Messages;