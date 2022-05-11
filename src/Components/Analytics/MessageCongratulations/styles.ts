import styled from 'styled-components';

export const Container = styled.div`
    width: 468px;
    height: 237px;
    border-radius: 1rem;

    @media (max-width: 800px) {
        width: 100%;
    }


    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 2rem;

    background-image: url('https://d3ugyf2ht6aenh.cloudfront.net/stores/963/751/products/junina_43_v-copiar1-00908963ea215372a515605291769281-1024-1024.jpg');
    background-position: center;

    h2 {
        font-size: 2rem;
        font-weight: bold;
        color: ${props => props.theme.colors.text};
    }

    h4 {
        margin-top: 1rem;
        font-size: 1rem;
        color: ${props => props.theme.colors.text};

        strong {
            font-size: 1.3rem;
        }
    }
`;
