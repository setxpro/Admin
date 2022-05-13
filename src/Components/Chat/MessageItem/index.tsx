import React from 'react';

import * as C from './styles';

export type User = {
    id: number;
    avatar: string;
    name: string;
}

interface Props {
    body: string;
    user: User;
    author: string;
}

const MessageItem: React.FC<Props> = ({body, user, author}) => {
  return (
      <C.Container user={user} author={author}>
            <C.MessageItem  user={user} author={author}>
                <p>{body}</p>
                <span>19:00</span>
            </C.MessageItem>
      </C.Container>
  );
}

export default MessageItem;