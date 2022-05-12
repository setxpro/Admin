import styled from 'styled-components';

export const Container = styled.div`
    height: 518px;
    background: ${props => props.theme.colors.navBar};
    width: 100%;
    border: 1px solid ${props => props.theme.colors.border};
    display: flex;
    flex-direction: column;


    h2 {
        width: inherit;
        padding: 10px 0;
        text-align: center;
        font-size: 1.5rem;
        color: ${props => props.theme.colors.text};
    }
`;

export const Content = styled.div`
   display: flex;
   align-items: center;
   flex-direction: column;
   height: 470px;
   overflow-y: scroll;

   ::-webkit-scrollbar {
       width: 3px;
   }
   ::-webkit-scrollbar-track {
       background: rgba(0,0,0,0.2);
   }
   ::-webkit-scrollbar-thumb {
       background: rgba(0,0,0,0.3);
   }
`;
