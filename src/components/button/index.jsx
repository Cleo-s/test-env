import React from 'react';

import './button.css';

function Button({onClick, label, className}) {
    return (
        <button onClick={onClick} className={className}>{label}</button>
    )
} 

export default Button;