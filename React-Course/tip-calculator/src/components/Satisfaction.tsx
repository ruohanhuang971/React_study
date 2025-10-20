import type { ReactNode } from 'react';

interface SatisfactionProps {
    onSet: (i: number) => void;
    satisfaction: number;
    children: ReactNode;
}

const Satisfaction = ({ onSet, satisfaction, children }: SatisfactionProps) => {
    return (
        <div>
            <span>{children} </span>

            <select
                value={satisfaction}
                onChange={(e) => onSet(Number(e.target.value))}
            >
                <option value="0">Dissatisfied (0%)</option>
                <option value="5">It was okay (5%)</option>
                <option value="10">It was good (10%)</option>
                <option value="20">Absolutely amazing! (20%)</option>
            </select>
        </div>
    );
};

export default Satisfaction;
