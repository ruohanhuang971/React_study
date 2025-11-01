import { useState, type ReactNode } from 'react';

interface BoxProp {
    children: ReactNode;
}

const Box = ({ children }: BoxProp) => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className="box">
            <button
                className="btn-toggle"
                onClick={() => setIsOpen((open) => !open)}
            >
                {isOpen ? '–' : '+'}
            </button>
            {isOpen && children}
        </div>
    );
};

export default Box;
