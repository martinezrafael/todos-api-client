import React from "react";
import styled from 'styled-components';

const HeaderTodo = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: purple;
    color: #fff;
`

export const Header = () => {
    return (
       <HeaderTodo>
           <h1>TODO LIST</h1>
       </HeaderTodo>
    )
}