import { useReducer } from 'react';

type State = {
    count: number;
    step: number;
};

type Action =
    | { type: 'inc' }
    | { type: 'dec' }
    | { type: 'set'; payload: number }
    | { type: 'setStep'; payload: number }
    | { type: 'reset' };

const initialState = { count: 0, step: 1 };
// current state + action => return next state
function reducer(state: State, action: Action): State {
    switch (action.type) {
        case 'inc':
            return { ...state, count: state.count + state.step };
        case 'dec':
            return { ...state, count: state.count - state.step };
        case 'set':
            return { ...state, count: action.payload };
        case 'setStep':
            return { ...state, step: action.payload };
        case 'reset':
            return initialState;
        default:
            throw new Error('Unknown action');
    }
}

function DateCounter() {
    // const [count, setCount] = useState(0);
    // const [step, setStep] = useState(1);
    const [state, dispatch] = useReducer(reducer, initialState);
    const { count, step } = state;

    // This mutates the date object.
    const date = new Date('june 21 2027');
    date.setDate(date.getDate() + count);

    const dec = function () {
        dispatch({ type: 'dec' });
        // setCount((count) => count - 1);
        // setCount((count) => count - step);
    };

    const inc = function () {
        dispatch({ type: 'inc' });
        // setCount((count) => count + 1);
        // setCount((count) => count + step);
    };

    const defineCount = function (e: React.ChangeEvent<HTMLInputElement>) {
        dispatch({ type: 'set', payload: Number(e.target.value) });
        // setCount(Number(e.target.value));
    };

    const defineStep = function (e: React.ChangeEvent<HTMLInputElement>) {
        dispatch({ type: 'setStep', payload: Number(e.target.value) });
        // setStep(Number(e.target.value));
    };

    const reset = function () {
        dispatch({ type: 'reset' });
        // setCount(0);
        // setStep(1);
    };

    return (
        <div className="counter">
            <div>
                <input
                    type="range"
                    min="0"
                    max="10"
                    value={step}
                    onChange={defineStep}
                />
                <span>{step}</span>
            </div>

            <div>
                <button onClick={dec}>-</button>
                <input value={count} onChange={defineCount} />
                <button onClick={inc}>+</button>
            </div>

            <p>{date.toDateString()}</p>

            <div>
                <button onClick={reset}>Reset</button>
            </div>
        </div>
    );
}
export default DateCounter;
