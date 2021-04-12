import React from 'react';
import { Button } from '../common';


export const  Todo = ({ todo, handleToggle, handleRemove }) => {
    var togglerButtonTitle = "Not Done";
    var togglerButtonColor = "gray-500";
    if (todo.status !== 'complete') {
        togglerButtonTitle = "Done";
        togglerButtonColor = "green-700";
    };

    const todoTitleStyle = todo.status === "complete" ? "line-through" : "";

    return (
        <div
            className="flex mb-4 items-center justify-between"
        >
            <div>
                <div
                    className={`flex-grow text-gray-darkest ${todoTitleStyle}`}
                >
                    {todo.content}
                </div>
            </div>
            <div>
                <Button
                    buttonTitle={togglerButtonTitle}
                    buttonType="button"
                    buttonColor={togglerButtonColor}
                    buttonExtraStyle="ml-4 mr-2"
                    onButtonClick={handleToggle}
                />
                <Button
                    buttonTitle="Remove"
                    buttonType="button"
                    buttonColor="red-700"
                    buttonExtraStyle="ml-2"
                    onButtonClick={handleRemove}
                />
            </div>
        </div>
    )
}