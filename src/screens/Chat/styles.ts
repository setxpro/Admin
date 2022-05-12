import styled from 'styled-components';

import { MdOutlineDonutLarge } from 'react-icons/md';
import { BsChatLeftDots } from 'react-icons/bs';
import { FiMoreVertical } from 'react-icons/fi';
import { AiOutlineSearch } from 'react-icons/ai';

export const Container = styled.div`
    height: 518px;
    background: ${props => props.theme.colors.navBar};
    width: 100%;
    border: 1px solid ${props => props.theme.colors.border};
    display: flex;
`;

export const SidebarChat = styled.div`
    width: 35%;
    background: ${props => props.theme.colors.sidebar};

    display: flex;
    flex-direction: column;
    border-right: 1px solid ${props => props.theme.colors.border};

    header {
        height: 60px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 15px;
        border-bottom: 1px solid ${props => props.theme.colors.border};

        img {
            width: 40px;
            height: 40px;
            cursor: pointer;
            border-radius: 50%;
        }

        > div {
            display: flex;
            gap: 1rem;
        }
    }

   
`;

export const Donut = styled(MdOutlineDonutLarge)`
    color: ${props => props.theme.colors.text};
    font-size: 1.8rem;
    cursor: pointer;
`;
export const NewChat = styled(BsChatLeftDots)`
    color: ${props => props.theme.colors.text};
    font-size: 1.8rem;
    cursor: pointer;
`;
export const More = styled(FiMoreVertical)`
    color: ${props => props.theme.colors.text};
    font-size: 1.8rem;
    cursor: pointer;
`;
export const Search = styled(AiOutlineSearch)`
    color: ${props => props.theme.colors.text};
    font-size: 1.8rem;
    cursor: pointer;
`;
export const ContentSearchArea = styled.div`
    background: transparent;
    border-bottom: 1px solid ${props => props.theme.colors.border};
    padding: 5px 15px;

    > div {
        background: transparent;
        height: 40px;
        border-radius: 20px;
        display: flex;
        align-items: center;
        padding: 0 10px;

        input {
            flex: 1;
            border: 0;
            outline: 0;
            background: transparent;
            margin-left: 10px;
            color: ${props => props.theme.colors.text};
            font-size: 1rem;
        }
    }

    
`;

export const ContentChatListArea = styled.div`
    overflow-y: scroll;
    ::-webkit-scrollbar {
        width: 3px;
    }

    ::-webkit-scrollbar-track {
        background: ${props => props.theme.colors.sidebar};
    }
    ::-webkit-scrollbar-thumb {
        background: ${props => props.theme.colors.check};
    }
    
`;

export const ContentChatArea = styled.div`
    flex: 1;
`;