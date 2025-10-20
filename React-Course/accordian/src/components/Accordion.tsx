import React, { useState } from 'react';
import AccordionItem from './AccordionItem';

interface AccordionProps {
    data: { title: string; text: string }[];
}

const Accordion = ({ data }: AccordionProps) => {
    const [curOpen, setCurOpen] = useState<number | null>(null);

    return (
        <div className="accordion">
            {data.map((item, index) => {
                return (
                    <AccordionItem
                        key={index}
                        curOpen={curOpen}
                        onOpen={setCurOpen}
                        num={index}
                        title={item.title}
                    >
                        {item.text}
                    </AccordionItem>
                );
            })}
        </div>
    );
};

export default Accordion;
