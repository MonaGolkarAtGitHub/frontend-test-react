import React from 'react';

export const Header = ({ headerText, children }) => (
    <h1
        className="text-gray-darkest text-3xl font-bold relative"
    >
        {headerText}
        {children}
    </h1>
)
