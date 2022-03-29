import React, { useState } from "react";
import styled from 'styled-components';
import apiTodos from '../utils/api.utils';

const AddBar = styled.div`
    width: 100%;
    padding: 20px;
    display: flex;
    justify-content: center;
`

const AddButton = styled.button`
    padding: 5px;
    border-radius: 5px;
    background-color: #0D1117;
    color: #F5F5F5;
`

const Input = styled.input`
    width: 300px;
`


const AddTodo = (getAllTodos) => {

    const [title, setTitle] = useState('');

    const handleInput = (event) => {
        setTitle(event.currentTarget.value)
    }

    const handleAdd = async () => {
        try {
            await apiTodos.addTodo(title);
            setTitle('');
            await getAllTodos();
        } catch (error) {
            console.error(error);
        }
    }

    return (
       <AddBar>
           <Input value={title} onChange={handleInput} />
           <AddButton onClick={handleAdd}>Adicionar</AddButton>
       </AddBar>
    )

}

export default AddTodo;