import styled from 'styled-components';

export const Container = styled.div<{wrapper:boolean}>`
    display: none;
    @media (max-width: 800px) {
        display: inline;
    };

    background: ${props => props.theme.colors.navBar};

    transition: all 1s ease;
    height: ${props => props.wrapper ? ' 100px' : '0px'};
    overflow: hidden;

    width: 95%;
    position: absolute;
    margin-top: 5rem;

    border-radius: 1rem;
    box-shadow: 1px 2px 15px rgba(0,0,0,0.5);

    nav {

        ul {
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            height: 100px;
            gap: 1rem;

            padding: 5px 1rem;
            a {
                text-decoration: none;
                color: ${props => props.theme.colors.text};
            }
        }
    }
`;
