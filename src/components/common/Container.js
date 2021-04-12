import React from 'react';

export const Container = ({ children }) => (
    <div
        className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans"
    >
        <div
            className="bg-white rounded shadow p-6 m-4 w-full lg:w-2/5"
        >
            <div
                className="mb-4"
            >
                {children}
            </div>
        </div>
    </div>
)