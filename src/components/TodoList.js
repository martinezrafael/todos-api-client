import TodoItem from './TodoItem';


const TodoList = ({ todos, getAllTodos}) => {

    return (
        <div>
            {todos.map(todo => <TodoItem key={ todo._id } { ...todo } getAllTodos={getAllTodos}/>)}
        </div>
    )
}

export default TodoList;