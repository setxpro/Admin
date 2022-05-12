import styled from 'styled-components';

export const Container = styled.div<{mode:boolean | number}>`
    
    display: flex;
    cursor: pointer;
    align-items: center;
    height: 70px;
    border-bottom: 1px solid ${props => props.theme.colors.border};

    transition: all .5s ease; 
    &:hover {
       background: ${props => props.theme.colors.border};
    }

    background: ${props => props.mode && props.theme.colors.border};
`;

export const ContentImage = styled.div`
        width: 40px;
        height: 40px;
        border-radius: 50%;
        position: relative;

    img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin-left: 15px;
    }

    &::after {
        content: '';
        width: 10px;
        height: 10px;
        background: green;
        position: absolute;
        bottom: 0;
        right: -12px;
        border-radius: 50%;
        border: 2px solid ${props => props.theme.colors.sidebar};
    }
`;


export const ChatListLines = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-right: 15px;
`;
export const ChatListLine = styled.div`
    margin-left: 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    h3 {
        font-size: 17px;
        color: ${props => props.theme.colors.text};
    }

    span {
        color: #666;
        font-size: 12px;
    }

    p {
        width: 270px;
        font-size: 13px;
        color: ${props => props.theme.colors.text};
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        margin-top: 8px;
    }
`;