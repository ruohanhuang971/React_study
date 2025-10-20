import { useState } from 'react';

const Counter = () => {
    const [step, setStep] = useState(1);
    const [count, setCount] = useState(0);

    const date = new Date('June 21 2022');
    date.setDate(date.getDate() + count);

    const handleClick = () => {
        setCount(0);
        setStep(1);
    };

    const handlePrevious = () => {
        setCount((s) => s - step);
    };

    const handleNext = () => {
        setCount((s) => s + step);
    };

    return (
        <div>
            <div>
                <input
                    type="range"
                    min={1}
                    max={10}
                    value={step}
                    onChange={(e) => setStep(Number(e.target.value))}
                />
                <span>{step}</span>
            </div>

            <div>
                <button onClick={handlePrevious}>-</button>
                <input
                    type="text"
                    value={count}
                    onChange={(e) => setCount(Number(e.target.value))}
                />
                <button onClick={handleNext}>+</button>
            </div>

            <div>
                {count === 0
                    ? 'Today is'
                    : count > 0
                    ? `${count} ${
                          Math.abs(count) === 1 ? 'day' : 'days'
                      } from today is`
                    : `${Math.abs(count)} ${
                          Math.abs(count) === 1 ? 'day' : 'days'
                      } ago was`}{' '}
                {date.toDateString()}
            </div>

            {count !== 0 || step !== 1 ? (
                <button onClick={handleClick}>Reset</button>
            ) : null}
        </div>
    );
};

export default Counter;
