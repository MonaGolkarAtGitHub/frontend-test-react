import React, { useState } from 'react';
import { Button, Input } from '../common';

export const TodoForm = ({ handleSubmit }) => {
    const [todoTitle, setTodoTitle] = useState("");

    const handleFormSubmit = (event) => {
        event.preventDefault();

        const newTodo = {
            content: todoTitle,
            status: 'incomplete',
            date_created: Date.now(),
            date_due: Date.now(),
        };
        setTodoTitle("");
        handleSubmit(newTodo);
    }

    return (
        <form onSubmit={handleFormSubmit} >
            <div
                className="flex my-8"
            >
                <Input
                    inputTitle="Add Todo"
                    inputValue={todoTitle}
                    onInputChange={setTodoTitle}
                />
                <Button
                    buttonTitle="Add"
                    buttonColor="teal-700"
                    onButtonClick={handleFormSubmit}
                />
            </div>
        </form>
    )
}