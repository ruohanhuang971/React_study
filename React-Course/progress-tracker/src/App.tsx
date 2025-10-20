import { useState } from 'react';
import Button from './components/Button';
import Message from './components/Message';

const messages = [
    'Learn React ⚛️',
    'Apply for jobs 💼',
    'Invest your new income 🤑',
];

const App = () => {
    const [step, setStep] = useState(1);
    const [isOpen, setIsOpen] = useState(true);

    const handlePrevious = () => {
        if (step > 1) setStep((s) => s - 1);
    };
    const handleNext = () => {
        if (step < 3) setStep((s) => s + 1);
    };

    return (
        <>
            <button className="close" onClick={() => setIsOpen((is) => !is)}>
                &times;
            </button>
            {isOpen && (
                <div className="steps">
                    <div className="numbers">
                        <div className={step >= 1 ? 'active' : ''}>1</div>
                        <div className={step >= 2 ? 'active' : ''}>2</div>
                        <div className={step >= 3 ? 'active' : ''}>3</div>
                    </div>
                    <Message step={step}>{messages[step - 1]}</Message>
                    <div className="buttons">
                        <Button
                            textColor="#ffffff"
                            bgColor="#7950f2"
                            onClick={handlePrevious}
                        >
                            <span>👈</span>
                            previous
                        </Button>
                        <Button
                            textColor="#ffffff"
                            bgColor="#7950f2"
                            onClick={handleNext}
                        >
                            <span>👉</span>
                            next
                        </Button>
                    </div>
                </div>
            )}
        </>
    );
};

export default App;
