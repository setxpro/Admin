import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { EmailDb } from '../emailItemsDb';

import * as C from './styles';

interface Props {
    id: string;
    name: string;
    email: string;
    subject: string;
    description: string;
    avatar: string;
    date: string;
}

const SingleMessage: React.FC = () => {

    const navigate = useNavigate();
    const { id } = useParams();

    const [stars, setStars] = useState(true);
    const toggleStars = () => setStars(!stars);

    const [message, setMessage] = useState<Props>();


    useEffect(() => {
        const getMessage = EmailDb.filter(message => message.id === id)[0];
        setMessage({
            id: getMessage.id,
            name: getMessage.name,
            email: getMessage.email,
            subject: getMessage.subject,
            description: getMessage.description,
            avatar: getMessage.avatar,
            date: getMessage.date
        });
    }, []);

    function goBack() {
        navigate('/email');
    }

  return (
      <C.Container>
        <C.AreaTitle>
            <C.ArrowLeft onClick={goBack}/>
            <h2>{message?.description}</h2>
            <C.ContentActionsMessage>
                {stars ? <C.FullStar onClick={toggleStars}/> : <C.Star onClick={toggleStars}/>}
                <C.Archive/>
                <C.Local/>
                <C.EmailMessage onClick={goBack}/>
                <C.Trash/>
            </C.ContentActionsMessage>
        </C.AreaTitle>
        <C.ContentMessage>
            <C.ContentTopoMessage>
                <C.ContentTopLeft>
                    <C.ContentTopImage>
                        <img src={message?.avatar} alt="avatar"/>
                    </C.ContentTopImage>
                    <C.ContentName>
                        <h3>{message?.name}</h3>
                        <p>{message?.email}</p>
                    </C.ContentName>
                </C.ContentTopLeft>
                <C.ContentTopRight>
                    <span>{message?.date}</span>
                </C.ContentTopRight>
            </C.ContentTopoMessage>
            <C.ContentBottomMessage>
                <p>
                Hi Patrick, <br/><br/>
                {message?.subject}
                </p>
            </C.ContentBottomMessage>
            <C.ContentAttachment>
                <div>
                    <C.Attach/> 1 Attachment
                </div>
                <div>
                    <C.PDFIcon/> <span>report.doc(32mb)</span>
                </div>
            </C.ContentAttachment>
        </C.ContentMessage>

      </C.Container>
  );
}

export default SingleMessage;