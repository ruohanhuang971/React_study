import { useEffect, type Dispatch } from 'react';
import type { Action } from '../App';

interface TimerProp {
    dispatch: Dispatch<Action>;
    secondsRemaining: number;
}

const Timer = ({ dispatch, secondsRemaining }: TimerProp) => {
    const min = Math.floor(secondsRemaining / 60);
    const sec = secondsRemaining % 60;

    useEffect(() => {
        const id = setInterval(() => {
            dispatch({ type: 'tick' });
        }, 1000);
        return () => clearInterval(id); // clear timer after unmount
    }, [dispatch]);

    return (
        <div className="timer">
            {min < 10 && '0'}
            {min}:{sec < 10 && '0'}
            {sec}
        </div>
    );
};

export default Timer;
