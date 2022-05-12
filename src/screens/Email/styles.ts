import styled from 'styled-components';

export const Container = styled.div`
    height: 518px;
    background: ${props => props.theme.colors.navBar};
    width: 100%;
    border: 1px solid ${props => props.theme.colors.border};

    display: flex;
`;
export const ContentSidebarActions = styled.div`
    height: 518px;
    width: 25%;
    height: 100%;
    border-right: 1px solid ${props => props.theme.colors.border};
    

    ul {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 1rem;
        margin-top: 2rem;
        a {
            text-decoration: none;
            color: ${props => props.theme.colors.text};
            margin-left: 10px;
        }
    }
`;

export const ContentButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    height: 60px;

    > button {
        padding: 10px 20px;
        border: 0;
        border-radius: 3px;
        background: #444DDD;
        cursor: pointer;
        box-shadow: 1px 2px 5px #44DD, 2px 1px 10px #444DDD;

        color: #FFF;
        font-weight: bold;
        font-size: 1rem;
    }
`;

export const ContentRight = styled.div`
    width: 100%;
`;
export const ContentSearch = styled.div`
    
`;
export const InputArea = styled.div`
    width: 100%;
    border: 1px solid ${props => props.theme.colors.border};
    padding: 1rem;

    input {
        border: none;
        color: ${props => props.theme.colors.text};
        font-size: 1.3rem;
        outline: none;

        background: transparent;
        width: 100%;
    }
`;
export const SelectArea = styled.div`
    width: 100%;
    border: 1px solid ${props => props.theme.colors.border};
    padding: 1rem;

    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 1.3rem;

    button {
        width: 1.3rem;
        height: 16px;
        background: transparent;
        border: 1px solid ${props => props.theme.colors.border};
        cursor: pointer;
    }

    label {
        color: ${props => props.theme.colors.text};
    }
`;

export const ContentMessage = styled.div`
    height: 410px;

    display: flex;
    flex-direction: column;

    overflow-y: scroll;

    ::-webkit-scrollbar {
        width: 3px;
    }
    ::-webkit-scrollbar-thumb {
        background: rgba(0,0,0,0.9);
        border-radius: 1rem;
    }
    ::-webkit-scrollbar-track {
        background: rgba(0,0,0,0.2);
    }
`;