import React from 'react';

export const Button = ({ buttonTitle, buttonType = "submit", buttonColor = "gray-500", buttonExtraStyle = "", onButtonClick }) => {
    let colorName, colorDepth
    [colorName, colorDepth = "700"] = buttonColor.split("-", 2)
    const colorStyle = ["red", "green", "teal", "gray"].includes(colorName) && /^[1-9]00$/.test(colorDepth)
        ? `text-${colorName}-${colorDepth} border-${colorName}-${colorDepth} hover:bg-${colorName}-${colorDepth}`
        : `text-gray-500 border-gray-500 hover:bg-gray-500`

    const buttonStyle = `flex-no-shrink p-2 border-2 rounded hover:text-white ${colorStyle} ${buttonExtraStyle}`;

    return (
        <button
            type={buttonType}
            className={buttonStyle}
            onClick={onButtonClick}
        >
            {buttonTitle}
        </button>
    )
}
