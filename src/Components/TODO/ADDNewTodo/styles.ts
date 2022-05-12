import styled from 'styled-components';

export const Container = styled.div`
    width: 50%;
    border: 1px solid #555;
    border-radius: 15px;
    padding: 10px;
    margin: 20px 0;
    display: flex;
    align-items: center;

        > span {
            margin-right: 5px;
            font-size: 1rem;
            color: #fff;
        }

        input {
            width: 50%;
            border: 0;
            background: transparent;
            outline: 0;
            color: #fff;
            font-size: 1rem;
            flex: 1;
    }
`;