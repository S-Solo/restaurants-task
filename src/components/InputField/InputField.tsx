import React from 'react';

import "./InputField.scss";

interface IInputFieldProps {
    value: string;
    onChange: (val: string) => void;
    className?: string;
    RightIcon?: React.FC;
    placeholder?: string;
};

const InputField: React.FC<IInputFieldProps> = ({
    value,
    onChange,
    className = '',
    RightIcon = null,
    placeholder = '',
}) => {
    return (
        <div className="app-input-container">
            <input
                value={value}
                onChange={(ev) => onChange(ev.target.value)}
                className={`app-input-container__input ${className}${RightIcon ? 'padding-right' : ''}`}
                placeholder={placeholder}
            />
            {RightIcon && (
                <div className="app-input-container__right-icon-container">
                    <RightIcon />
                </div>
            )}
        </div>
    );
}

export default InputField;