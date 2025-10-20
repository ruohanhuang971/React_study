import { useState } from 'react';
import questions from '../assets/questions';

const Flashcards = () => {
    const [selectedId, setSelectedId] = useState<number | null>(null);

    const handleClick = (id: number) => {
        setSelectedId(id === selectedId ? null : id);
    };

    return (
        <div className="flashcards">
            {questions.map((q) => (
                <div
                    key={q.id}
                    className={q.id == selectedId ? 'selected' : ''}
                    onClick={() => handleClick(q.id)}
                >
                    <p>{q.id == selectedId ? q.answer : q.question}</p>
                </div>
            ))}
        </div>
    );
};

export default Flashcards;
