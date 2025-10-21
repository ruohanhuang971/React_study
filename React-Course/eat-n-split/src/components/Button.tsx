import type { ReactNode } from 'react';

interface ButtonProps {
    onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    children: ReactNode;
}

const Button = ({ children, onClick }: ButtonProps) => {
    return (
        <button className="button" onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
