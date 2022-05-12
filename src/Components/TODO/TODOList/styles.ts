import styled from 'styled-components';

import { AiOutlineEdit } from 'react-icons/ai'
import { BsTrash } from 'react-icons/bs'

export const Container = styled.div<{done: boolean}>`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #20212C;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 10px;
    align-items: center;
    margin-top: 1rem;
    input {
        width: 18px;
        height: 18px;
        margin-right: 5px;
    }
    label {
        color: #eee;
        text-decoration: ${props => props.done ? 'line-through' : 'initial'};  
    }
`;

export const ContainerList = styled.div`
    display: flex;
    align-items: center;
`;
export const ContainerActions = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;

    button {
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
    }
`;

export const EditIcon = styled(AiOutlineEdit)`
    font-size: 1.3rem;
    color: #fff;
`;
export const TrashIcon = styled(BsTrash)`
    font-size: 1.3rem;
    color: #fff;
`;