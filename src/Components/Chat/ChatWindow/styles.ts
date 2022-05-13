import styled from 'styled-components';

import { IoSend } from 'react-icons/io5';
import { BsFillMicFill } from 'react-icons/bs';
import { BsFillEmojiLaughingFill } from 'react-icons/bs';
import { IoMdClose } from 'react-icons/io';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
   
`;
export const ChatWindowHeader = styled.div`
    height: 60px;
    border-bottom: 1px solid ${props => props.theme.colors.border};
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
export const ChatWindowHeaderInfo = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;

    img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin-left: 15px;
        margin-right: 15px;
    }
    h3 {
        font-size: 1.1rem;
        color: ${props => props.theme.colors.text};
        font-weight: 400;
    }
`;

export const ChatWindowHeaderButtons = styled.div`

    > div {
        display: flex;
        align-items: center;
        gap: 10px;
    }
`;


export const ChatWindowBody = styled.div`
    flex: 1;
    overflow-y: auto;
    padding: 1rem;
    background-position: top;
    background-size: cover;
    background-image: ${props => (props.theme.title === 'dark' && `url('https://i.pinimg.com/originals/38/97/45/38974508cadb294a775d52a31c17696f.jpg')`) || (props.theme.title === 'light' && `url('https://i.pinimg.com/originals/31/20/02/312002e72be57b51e983f90fb1fdcf6b.jpg')`)};

    ::-webkit-scrollbar {
        width: 3px;
    }
    ::-webkit-scrollbar-track {
        background: rgba(0,0,0,0.2);
    }
    ::-webkit-scrollbar-thumb {
        background: rgba(0,0,0,0.4);
    }
`;


export const MicIcon = styled(BsFillMicFill)`
    color: ${props => props.theme.colors.text};
    font-size: 1.3rem;
    margin-left: 15px;

    cursor: pointer;
`;
export const SendIcon = styled(IoSend)`
    color: ${props => props.theme.colors.text};
    font-size: 1.3rem;
    margin-left: 15px;
    cursor: pointer;
`;
export const Emoji = styled(BsFillEmojiLaughingFill)`
    color: ${props => props.theme.colors.text};
    font-size: 1.3rem;
    margin-right: 15px;
    cursor: pointer;
`;
export const CloseEmoji = styled(IoMdClose)`
    color: ${props => props.theme.colors.text};
    font-size: 1.3rem;
    margin-right: 15px;
    cursor: pointer;
`;

export const ChatWindowFooter = styled.div`
    height: 42px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 15px
`;


export const ChatWindowFooterLeft = styled.div`
    display: flex;
`;
export const ChatWindowFooterInput = styled.div`
    flex: 1;

    input {
        width: 100%;
        height: 30px;
        border: 0;
        outline: 0;
        background: ${props => props.theme.colors.primary};
        border-radius: 10px;
        font-size: 1rem;
        color: ${props => props.theme.colors.text};
        padding-left: 15px;
    }
`;
export const ChatWindowFooterRight = styled.div`
    display: flex;
`;
export const EmojiArea = styled.div<{emojiOpen: boolean}>`
    overflow-y: hidden;
    height: ${props => props.emojiOpen ? '200px' : '0px'};
    transition: all 0.3s ease;

    aside,.emoji-picker-react {
        width: auto;
        border: 1px solid ${props => props.theme.colors.border};
        background: ${props => props.theme.colors.primary};
    }
    .emoji-picker-react .emoji-group::before {
        background: ${props => props.theme.colors.primary};
    }

`;