import type { ReactNode } from 'react';

interface MessageProps {
    step: number;
    children: ReactNode;
}

const Message = ({ step, children }: MessageProps) => {
    return (
        <div className="message">
            Step {step}: {children}
        </div>
    );
};

export default Message;
