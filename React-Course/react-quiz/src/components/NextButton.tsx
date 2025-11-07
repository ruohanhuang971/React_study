import type { Dispatch } from 'react';
import type { Action } from '../App';

interface NextButtonProp {
    dispatch: Dispatch<Action>;
    answer: number | null;
    index: number;
    numQuestions: number;
}

const NextButton = ({
    dispatch,
    answer,
    index,
    numQuestions,
}: NextButtonProp) => {
    if (answer === null) return null;
    if (index < numQuestions - 1) {
        return (
            <button
                className="btn btn-ui"
                onClick={() => dispatch({ type: 'nextQuestion' })}
            >
                Next
            </button>
        );
    }
    if (index === numQuestions - 1) {
        return (
            <button
                className="btn btn-ui"
                onClick={() => dispatch({ type: 'finished' })}
            >
                Finish
            </button>
        );
    }
};

export default NextButton;
