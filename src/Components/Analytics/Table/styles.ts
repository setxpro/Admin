import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 500px;
    background: ${props => props.theme.colors.navBar};
    padding: 1rem;
    border-radius: 1rem;
`;
