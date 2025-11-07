import type { Dispatch } from 'react';
import type { Action, QuestionType } from '../App';
import Options from './Options';

interface QuestionProp {
    question: QuestionType;
    answer: number | null;
    dispatch: Dispatch<Action>;
}

const Question = ({ question, answer, dispatch }: QuestionProp) => {
    console.log(question);
    return (
        <div>
            <h4>{question.question}</h4>
            <Options question={question} answer={answer} dispatch={dispatch} />
        </div>
    );
};

export default Question;
