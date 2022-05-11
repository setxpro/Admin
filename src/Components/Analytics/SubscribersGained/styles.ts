import styled from 'styled-components';

import { FiUsers } from 'react-icons/fi';

export const Container = styled.div`
    width: 250px;
    height: 237px;
    border-radius: 1rem;
    padding: 1rem;
    
    background: ${props => props.theme.colors.navBar};
`;


export const AreaIcon = styled.div`
    background: rgba(0,0,255,.2);
    width: 50px;
    height: 50px;

    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
`;
export const SbUsersIcon = styled(FiUsers)`
    color: #00f;
    font-size: 2rem;
`;