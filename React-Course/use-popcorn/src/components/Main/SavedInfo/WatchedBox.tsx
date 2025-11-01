import { useState } from 'react';
import { tempWatchedData } from '../../../assets/tempData';
import WatchedSummary from './WatchedSummary';
import WatchedMovieList from './WatchedMovieList';

export type MovieSummary = {
    imdbID: string;
    title: string;
    year: string;
    poster: string;
    imdbRating: number;
    userRating: number;
    runtime: number;
};

const WatchedBox = () => {
    const [watched, setWatched] = useState<MovieSummary[]>([]);
    const [isOpen2, setIsOpen2] = useState(true);

    return (
        <div className="box">
            <button
                className="btn-toggle"
                onClick={() => setIsOpen2((open) => !open)}
            >
                {isOpen2 ? '–' : '+'}
            </button>
            {isOpen2 && (
                <>
                    <WatchedSummary watched={watched} />
                    <WatchedMovieList watched={watched} />
                </>
            )}
        </div>
    );
};

export default WatchedBox;
