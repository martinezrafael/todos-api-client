import React, { useState } from "react";
import styled from 'styled-components';
import apiTodos from '../utils/api.utils';

const Row = styled.div`
    display: flex;
    justify-content: space-evenly;
    padding: 20px;
    background-color: #ccc;
`

const TodoItem = ({ _id, title, completed, getAllTodos }) => {

    const [checked, setChecked] = useState(completed);    

    const handleChecked = async (event) => {
        try {
            setChecked(event.currentTarget.checked);

            const localTodo = {
                title,
                completed: event.currentTarget.checked
            }
            
            await apiTodos.updateTodo(_id, localTodo)
            await getAllTodos();
        } catch (error) {
            console.error(error);
        }
    }

    const deleteItem = async (id) => {
        try {
            await apiTodos.deleteTodo(id)
            await getAllTodos();
        } catch (error) {
            console.error(error);
        }
    }

    return (
       <Row>
           <input type='checkbox' checked={checked} onChange={handleChecked} />
           <span>{title}</span>
           <button onClick={() => deleteItem(_id)}>X</button>
       </Row>
    )
}

export default TodoItem;

//title
//_id
//completed
