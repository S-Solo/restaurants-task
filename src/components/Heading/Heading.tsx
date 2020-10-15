import React from 'react';

import "./Heading.scss";

interface IHeadingProps {
    className?: string;
};

const Heading: React.FC<IHeadingProps> = ({ className, children }) => {
    return (
        <h1 className={`app-heading ${className}`}>
            {children}
        </h1>
    );
}

export default Heading;