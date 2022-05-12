import React, { useState } from 'react';
import ADDNewTodo from '../../Components/TODO/ADDNewTodo';
import TODOList from '../../Components/TODO/TODOList';
import { Item } from '../../Types';

import { Container, Content } from './styles';

const Todo: React.FC = () => {

    const [task, setTask] = useState<Item[]>([]);

    function handleAddTask(taskName: string) {
        let newTask = [...task];
        newTask.push({
            id: task.length + 1,
            name: taskName,
            done: false
        })

        setTask(newTask);
    }

    function handleDeleteTask(id: number) {
        let remove = task.filter(i => i.id !== id);
        return setTask(remove);
    }

  return (
      <Container>
          <h2>Lista de Tarefas</h2>

         <Content>
         <ADDNewTodo onEnter={handleAddTask}/>

            {task.map((task, index) => (
                <TODOList
                    key={index}
                    item={task}
                    handleDeleteTask={handleDeleteTask}
                />
            ))}
            
         </Content>

      </Container>
  );
}

export default Todo;