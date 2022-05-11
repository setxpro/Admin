import styled from 'styled-components';

import { BsBoxSeam } from 'react-icons/bs'

export const Container = styled.div`
    width: 250px;
    height: 237px;
    border-radius: 1rem;
    padding: 1rem;
    
    background: ${props => props.theme.colors.navBar};
`;
export const AreaIcon = styled.div`
    background: rgba(255, 159, 67,.2);
    width: 50px;
    height: 50px;

    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
`;
export const BoxIcon = styled(BsBoxSeam)`
    color: rgb(255, 159, 67);
    font-size: 2rem;
`;