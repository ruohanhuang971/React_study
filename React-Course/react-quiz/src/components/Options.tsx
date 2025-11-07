import type { Dispatch } from 'react';
import type { Action, QuestionType } from '../App';

interface OptionsProp {
    question: QuestionType;
    answer: number | null;
    dispatch: Dispatch<Action>;
}

const Options = ({ question, answer, dispatch }: OptionsProp) => {
    const hasAnswer = answer !== null;

    return (
        <div className="options">
            {question.options.map((option, index) => (
                <button
                    className={`btn btn-option ${
                        index === answer ? 'answer' : ''
                    } ${
                        hasAnswer
                            ? index === question.correctOption
                                ? 'correct'
                                : 'wrong'
                            : ''
                    }`}
                    key={option}
                    disabled={hasAnswer}
                    onClick={() => dispatch({ type: 'answer', payload: index })}
                >
                    {option}
                </button>
            ))}
        </div>
    );
};

export default Options;
