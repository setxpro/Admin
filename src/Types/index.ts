export type Item = {
    id: number;
    name: string;
    done: boolean;
}

export type PropAddTodo = {
    onEnter: (taskName: string) => void; 
}