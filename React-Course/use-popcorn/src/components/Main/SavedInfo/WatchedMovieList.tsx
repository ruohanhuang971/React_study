import type { MovieSummary } from './WatchedBox';
import WatchedMovie from './WatchedMovie';

interface WatchedMovieProp {
    watched: MovieSummary[];
    onDeleteWatched: (id: string) => void;
}

const WatchedMovieList = ({ watched, onDeleteWatched }: WatchedMovieProp) => {
    return (
        <ul className="list">
            {watched.map((movie) => (
                <WatchedMovie
                    movie={movie}
                    key={movie.imdbID}
                    onDeleteWatched={onDeleteWatched}
                />
            ))}
        </ul>
    );
};

export default WatchedMovieList;
