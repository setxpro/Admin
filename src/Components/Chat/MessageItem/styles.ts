import styled from 'styled-components';
import { User } from '.';

export const Container = styled.div<{user: User, author: string}>`
    margin-bottom: 10px;
    display: flex;
    
    justify-content: ${props => props.user.name === props.author ? 'flex-end' : 'flex-start'};
`;
export const MessageItem = styled.div<{user: User, author: string}>`
    background: ${props => props.user.name === props.author ? props.theme.colors.primary : props.theme.colors.navBar};
    border-radius: 10px;
    box-shadow: 1px 1px 5px ${props => props.theme.colors.border};
    display: flex;
    flex-direction: column;
    padding: 3px;
    border: none;
    max-width: 50%;

    p {
        color: ${props => props.theme.colors.text};
        font-size: 14px;
        margin: 5px 40px 5px 5px;
    }
    span {
        color: #666;
        font-size: 11px;
        margin-right: 5px;
        text-align: right;
        height: 15px;
        margin-top: -15px;
    }
`;
