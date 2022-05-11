import styled from 'styled-components';

export const Container = styled.div`
    width: 82%;
    transition: all 1s ease;
    background: ${props => props.theme.colors.primary};
    padding: 15px 20px;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media (max-width: 800px) {
        width: 100%;
    }
`;
