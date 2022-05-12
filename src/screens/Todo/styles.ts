import styled from 'styled-components';

export const Container = styled.div`
    height: 518px;
    background: ${props => props.theme.colors.navBar};
    width: 100%;
    border: 1px solid ${props => props.theme.colors.border};
    display: flex;



    h2 {
        width: inherit;
        padding: 10px 0;
        text-align: center;
        font-size: 1.5rem;
        color: ${props => props.theme.colors.text};
    }
`;
