import { useEffect, useReducer } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';

type Question = {
    question: string;
    option: string[];
    correctOption: number;
    points: number;
    id: string;
};

type State = {
    questions: Question[];
    status: 'loading' | 'error' | 'ready' | 'active' | 'finished';
};

type Action =
    | { type: 'dataReceived'; payload: Question[] }
    | { type: 'dataFailed' };
// | {type: 'dataLoading'}

const initialState: State = {
    questions: [],
    // loading, error, ready, active, finished
    status: 'loading',
};

const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'dataReceived':
            return { ...state, questions: action.payload, status: 'ready' };
        case 'dataFailed':
            return { ...state, status: 'error' };
        default:
            throw new Error('Action unknown');
    }
};

function App() {
    // manage state with reducer
    const [state, dispatch] = useReducer(reducer, initialState);

    // fetch data from mock api
    useEffect(() => {
        fetch('http://localhost:8000/questions')
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                dispatch({ type: 'dataReceived', payload: data });
            })
            .catch(() => dispatch({ type: 'dataFailed' }));
    }, []);

    return (
        <div className="app">
            <Header />

            <Main>
                <p>1/15</p>
                <p>Question?</p>
            </Main>
        </div>
    );
}

export default App;
