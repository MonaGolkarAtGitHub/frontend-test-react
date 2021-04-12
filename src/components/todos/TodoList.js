import React from 'react';
import { Todo } from './index';

export const TodoList = ({ todoItems, handleToggle, handleRemove }) => {

    return todoItems.map((todo, index) => {
        return (
            <Todo
                key={`todo_${index}`}
                todo={todo}
                handleToggle={() => handleToggle(index)}
                handleRemove={() => handleRemove(index)}
            />
        )
    })
}
