import React, { useState } from 'react';
import { Item } from '../../../Types';

import { 
    Container, 
    ContainerList, 
    ContainerActions, 
    EditIcon, 
    TrashIcon 
} from './styles';

interface Props {
    item: Item;
    handleDeleteTask: (id:number) => void;
}

const TODOList: React.FC<Props> = ({ item, handleDeleteTask }) => {

    const [isChecked, setIsChecked] = useState(item.done);

    return (
        <Container done={isChecked}>
            <ContainerList>
                <input type="checkbox" checked={isChecked}  onChange={e => setIsChecked(e.target.checked)} />
                <label>{item.name}</label>
            </ContainerList>
            <ContainerActions>
                <button><EditIcon/></button>
                <button onClick={() => handleDeleteTask(item.id)}><TrashIcon/></button>
            </ContainerActions>
        </Container>
    )
}

export default TODOList;