import React from 'react';

import { Container, Content, ContentImage } from './styles';

interface InfoUserLoggedProps {
    name: string;
    occupation: string;
    avatar: string;
}

const InfoEmployeer: React.FC<InfoUserLoggedProps> = ({ name, occupation, avatar }) => {
  return (
      <Container>
          <Content>
            <ContentImage>
                <img src={avatar} alt="avatar"/>
            </ContentImage>
            <h2>Patrick Anjos</h2>
            <h4>Developer</h4>
          </Content>
      </Container>
  );
}

export default InfoEmployeer;