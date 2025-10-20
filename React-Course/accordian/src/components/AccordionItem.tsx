import type { ReactNode } from 'react';

export interface AccordionItemProp {
    curOpen: number | null;
    onOpen: (i: number | null) => void;
    num: number;
    title: string;
    children: ReactNode;
}

const AccordionItem = ({
    curOpen,
    onOpen,
    num,
    title,
    children,
}: AccordionItemProp) => {
    const isOpen = curOpen != null && num === curOpen;

    const handleToggle = () => {
        onOpen(isOpen ? null : num);
    };

    return (
        <div className={`item ${isOpen ? 'open' : ''}`} onClick={handleToggle}>
            <p className="number">{num < 9 ? `0${num + 1}` : `${num + 1}`}</p>
            <p className="title">{title}</p>
            <p className="icon">{isOpen ? '-' : '+'}</p>
            {isOpen && <p className="content-box">{children}</p>}
        </div>
    );
};

export default AccordionItem;
