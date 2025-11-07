import type { Dispatch } from 'react';
import type { Action } from '../App';

interface FinishScreenProp {
    points: number;
    maxPossiblePoints: number;
    highscore: number;
    dispatch: Dispatch<Action>;
}

const FinishScreen = ({
    points,
    maxPossiblePoints,
    highscore,
    dispatch,
}: FinishScreenProp) => {
    const percentage = Math.ceil((points / maxPossiblePoints) * 100);

    let emoji;
    if (percentage === 100) emoji = '🪙';
    if (percentage >= 80 && percentage < 100) emoji = '🥳';
    if (percentage >= 50 && percentage < 80) emoji = '😀';
    if (percentage >= 0 && percentage < 50) emoji = '😐';
    if (percentage === 0) emoji = '🤦';

    return (
        <>
            <p className="result">
                <span>{emoji}</span> You scored <strong>{points}</strong> out of{' '}
                {maxPossiblePoints} ({percentage}%)
            </p>
            <p className="highscore">(Highscore: {highscore} points)</p>
            <button
                className="btn btn-ui"
                onClick={() => dispatch({ type: 'restart' })}
            >
                Restart Quiz
            </button>
        </>
    );
};

export default FinishScreen;
