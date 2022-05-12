import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { BsCheck2 } from 'react-icons/bs';

export const Container = styled.div`
    
    height: 100%;
    width: 100%;
    background: rgba(0,0,0,0.5);

    padding: 1rem 1.5rem;
    border: 1px solid ${props => props.theme.colors.border};


    &:nth-child(even) {
        background: rgba(0, 0, 0, .7);
    }
`;
export const ContentTop = styled(Link)`
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 5px;
    position: relative;

    p {
        position: absolute;
        top: 0;
        right: 0;
        color: ${props => props.theme.colors.text};
    }
`;
export const ContentImage = styled.div`
   img {
       width: 50px;
       height: 50px;
       border-radius: 50%;
   }
`;
export const ContentNameInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;

    h2 {
        font-size: 20px;
        color: ${props => props.theme.colors.text};
    }
    h4 {
        color: #555;
    }
`;
export const ContentBottom = styled.div`
   display: flex;
   align-items: center;
   gap: 1rem;
   margin-top: 1rem;
   position: relative;

   p {
       width: 800px;
       text-overflow: ellipsis;
       overflow: hidden;
       white-space: nowrap;
       color: #444;
   }

    button {
        width: 15px;
        height: 15px;
        background: transparent;
        border: 1px solid ${props => props.theme.colors.border};
        cursor: pointer;
    }
`;

export const CheckedIcon = styled(BsCheck2)`
    font-size: 15px;
    color: ${props => props.theme.colors.check};
`;