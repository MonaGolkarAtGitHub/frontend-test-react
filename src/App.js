import React, { useState, useEffect } from 'react';
import { Container, Header, Button } from './components/common';
import { TodoList, TodoForm } from './components/todos';
import { todos } from './data/todos';

function App() {
    const [todoItems, setTodoItems] = useState(todos);
    const [activateRemoveAll, setActivateRemoveAll] = useState(false);

    useEffect(() => {
        setActivateRemoveAll(todoItems?.every(todo => todo.status === "complete"))
    }, [todoItems]);

    const handleNewTodo = newTodo => {
        setTodoItems([...todoItems, newTodo]);
    }

    const handleDeleteTodo = index => {
        const newTodoItems = [...todoItems];
        newTodoItems.splice(index, 1);

        setTodoItems(newTodoItems);
    }

    const handleChangeTodo = index => {
        const changedTodo = todoItems[index];
        changedTodo.status = (changedTodo.status === "complete") ? "incomplete" : "complete";

        const newTodoItems = [...todoItems];
        newTodoItems.splice(index, 1, changedTodo);

        setTodoItems(newTodoItems);
    }

    const handleCompleteAll = () => {
        setTodoItems([...todoItems].map(todo => {todo.status = "complete"; return todo}));
    }

    const handleRemoveAll = () => {
        setTodoItems([]);
    }

    const headerButton = (buttonAction) => {
        if (buttonAction === "completeAll") {
            return <Button
                buttonTitle="Complete All"
                buttonType="button"
                buttonColor="teal-300"
                buttonExtraStyle="absolute top-0 right-0 text-base"
                onButtonClick={handleCompleteAll}
            />
        } else if (buttonAction === "removeAll") {
            return <Button
                buttonTitle="Remove All"
                buttonType="button"
                buttonColor="red-700"
                buttonExtraStyle="absolute top-0 right-0 text-base"
                onButtonClick={handleRemoveAll}
            />
        }
    }

    return (
        <div className="App">
            <Container>
                <Header
                    headerText="Todo List"
                >
                    {headerButton(todoItems?.length > 0 ? activateRemoveAll ? "removeAll" : "completeAll" : "")}
                </Header>
                <TodoForm
                    handleSubmit={handleNewTodo.bind(this)}
                />
                <TodoList
                    todoItems={todoItems}
                    handleToggle={handleChangeTodo.bind(this)}
                    handleRemove={handleDeleteTodo.bind(this)}
                />
            </Container>
        </div>
    );
}

export default App;
