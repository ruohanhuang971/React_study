import type { ReactNode } from 'react';

interface ButtonProps {
    textColor: string;
    bgColor: string;
    onClick: () => void;
    children: ReactNode;
}

const Button = ({ textColor, bgColor, onClick, children }: ButtonProps) => {
    return (
        <button
            style={{
                backgroundColor: bgColor,
                color: textColor,
            }}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
