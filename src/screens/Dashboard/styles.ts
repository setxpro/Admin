import styled from 'styled-components';

export const Container = styled.ul<{wrapper: boolean}>`
  
  > div {
        transition: all .5s linear;
        height: ${props => props.wrapper ? '65px' : '0px'};
        overflow: hidden;

        .active {
            background: #444DDD;
            box-shadow: 1px 1px 15px #444DDD;
        }
        a {
           
            li {
                width: 85%;
                margin: auto;
                border-radius: 4px;
                background: #161D31;
                margin-bottom: 5px;
                color: #fff;
            }
        }
    }
`;
