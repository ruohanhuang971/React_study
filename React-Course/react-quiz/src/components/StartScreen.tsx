import type { Dispatch } from 'react';
import type { Action } from '../App';

interface StartScreenProp {
    numQuestions: number;
    dispatch: Dispatch<Action>;
}

const StartScreen = ({ numQuestions, dispatch }: StartScreenProp) => {
    return (
        <div className="start">
            <h2>Welcome To The React Quiz!</h2>
            <h3>{numQuestions} question to test your React mastery</h3>
            <button
                className="btn btn-ui"
                onClick={() => dispatch({ type: 'start' })}
            >
                Let's start
            </button>
        </div>
    );
};

export default StartScreen;
