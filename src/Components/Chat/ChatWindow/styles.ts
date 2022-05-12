import styled from 'styled-components';

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
    background-image: ${props => (props.theme.title === 'dark' && `url('https://i.pinimg.com/originals/38/97/45/38974508cadb294a775d52a31c17696f.jpg')`) || (props.theme.title === 'light' && `url('https://i.pinimg.com/originals/31/20/02/312002e72be57b51e983f90fb1fdcf6b.jpg')`)};
`;


export const ChatWindowFooter = styled.div`
  
`;

export const ChatWindowFooterLeft = styled.div``;
export const ChatWindowFooterInput = styled.div``;
export const ChatWindowFooterRight = styled.div``;