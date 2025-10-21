import type { MovieSummary } from './WatchedBox';
import WatchedMovie from './WatchedMovie';

interface WatchedMovieProp {
    watched: MovieSummary[];
}

const WatchedMovieList = ({ watched }: WatchedMovieProp) => {
    return (
        <ul className="list">
            {watched.map((movie) => (
                <WatchedMovie movie={movie} key={movie.imdbID} />
            ))}
        </ul>
    );
};

export default WatchedMovieList;
