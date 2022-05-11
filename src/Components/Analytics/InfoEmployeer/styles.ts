import styled from 'styled-components';

export const Container = styled.div`
    width: 190px;
    height: 237px;
    background: ${props => props.theme.colors.navBar};
    border-radius: 1rem;
    padding: 1rem;

    display: none;

    @media (max-width: 800px) {
        display: inline;
    }
`;

export const Content = styled.div`
    height: inherit;
    display: flex;
    flex-direction: column;
    align-items: center;

       

    h2 {
        color: ${props => props.theme.colors.text};
        padding: 5px 0;
    }

    h4 {
        color: ${props => props.theme.colors.text};
        padding: 5px 0;
    }
`;


export const ContentImage = styled.div`
    position: relative;

        img {
                width: 100px;
                height: 100px;
                border-radius: 50%;
                margin-bottom: 1rem;
            }

    &::before {
        width: 20px;
        height: 20px;
        position: absolute;
        bottom: 25px;
        right: 5px;
        top: calc(50%-4.5px);
        background: green; 
        border-radius: 50%;
        content: '';
        border: 4px solid ${props => props.theme.colors.navBar};
    }
`;