import type { ReactNode } from 'react';
import styles from './Button.module.css';

type ButtonProp = {
    children: ReactNode;
    onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    type: 'primary' | 'back' | 'position';
};

const Button = ({ children, onClick, type }: ButtonProp) => {
    return (
        <button onClick={onClick} className={`${styles.btn} ${styles[type]}`}>
            {children}
        </button>
    );
};

export default Button;
