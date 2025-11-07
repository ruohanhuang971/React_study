import { useEffect, useReducer } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Loader from './components/Loader';
import ErrorElem from './components/Error';
import StartScreen from './components/StartScreen';
import Question from './components/Question';
import NextButton from './components/NextButton';
import Progress from './components/Progress';
import FinishScreen from './components/FinishScreen';
import Footer from './components/Footer';
import Timer from './components/Timer';

const SECS_PER_QUESTION = 30;

export type QuestionType = {
    question: string;
    options: string[];
    correctOption: number;
    points: number;
    id: string;
};

export type State = {
    questions: QuestionType[];
    status: 'loading' | 'error' | 'ready' | 'active' | 'finished';
    index: number;
    answer: number | null;
    points: number;
    highscore: number;
    secondsRemaining: number | null;
};

export type Action =
    | { type: 'dataReceived'; payload: QuestionType[] }
    | { type: 'dataFailed' }
    | { type: 'start' }
    | { type: 'answer'; payload: number }
    | { type: 'nextQuestion' }
    | { type: 'finished' }
    | { type: 'restart' }
    | { type: 'tick' };

const initialState: State = {
    questions: [],
    // loading, error, ready, active, finished
    status: 'loading',
    index: 0,
    answer: null,
    points: 0,
    highscore: 0,
    secondsRemaining: null,
};

const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'dataReceived':
            return { ...state, questions: action.payload, status: 'ready' };
        case 'dataFailed':
            return { ...state, status: 'error' };
        case 'start':
            return {
                ...state,
                status: 'active',
                secondsRemaining: state.questions.length * SECS_PER_QUESTION,
            };
        case 'answer': {
            const question = state.questions.at(state.index);

            return {
                ...state,
                answer: action.payload,
                points:
                    action.payload === question?.correctOption
                        ? state.points + question.points
                        : state.points,
            };
        }
        case 'nextQuestion':
            return { ...state, index: state.index + 1, answer: null };
        case 'finished': {
            return {
                ...state,
                status: 'finished',
                highscore:
                    state.points > state.highscore
                        ? state.points
                        : state.highscore,
            };
        }
        case 'restart':
            return {
                ...initialState,
                questions: state.questions,
                status: 'ready',
            };
        case 'tick':
            return {
                ...state,
                secondsRemaining: state.secondsRemaining! - 1,
                status:
                    state.secondsRemaining === 0 ? 'finished' : state.status,
            };
        default:
            throw new Error('Action unknown');
    }
};

function App() {
    // manage state with reducer
    const [
        {
            questions,
            status,
            index,
            answer,
            points,
            highscore,
            secondsRemaining,
        },
        dispatch,
    ] = useReducer(reducer, initialState);

    const numQuestions = questions.length;
    const maxPossiblePoints = questions.reduce(
        (prev, cur) => prev + cur.points,
        0
    );

    // fetch data from mock api
    useEffect(() => {
        fetch('http://localhost:8000/questions')
            .then((res) => res.json())
            .then((data) => {
                dispatch({ type: 'dataReceived', payload: data });
            })
            .catch(() => dispatch({ type: 'dataFailed' }));
    }, []);

    return (
        <div className="app">
            <Header />

            <Main>
                {status === 'loading' && <Loader />}
                {status === 'error' && <ErrorElem />}
                {status === 'ready' && (
                    <StartScreen
                        numQuestions={numQuestions}
                        dispatch={dispatch}
                    />
                )}
                {status === 'active' && (
                    <>
                        <Progress
                            index={index}
                            numQuestions={numQuestions}
                            points={points}
                            maxPossiblePoints={maxPossiblePoints}
                            answer={answer}
                        />
                        <Question
                            question={questions[index]}
                            answer={answer}
                            dispatch={dispatch}
                        />
                        <Footer>
                            <Timer
                                dispatch={dispatch}
                                secondsRemaining={secondsRemaining!}
                            />
                            <NextButton
                                dispatch={dispatch}
                                answer={answer}
                                index={index}
                                numQuestions={numQuestions}
                            />
                        </Footer>
                    </>
                )}
                {status === 'finished' && (
                    <FinishScreen
                        points={points}
                        maxPossiblePoints={maxPossiblePoints}
                        highscore={highscore}
                        dispatch={dispatch}
                    />
                )}
            </Main>
        </div>
    );
}

export default App;
