import Movie, { type MovieType } from './Movie';

interface MovieListProp {
    movies: MovieType[];
    onSelectMovie: (id: string) => void;
}

const MovieList = ({ movies, onSelectMovie }: MovieListProp) => {
    return (
        <ul className="list list-movies">
            {movies?.map((movie) => (
                <Movie
                    movie={movie}
                    onSelectMovie={onSelectMovie}
                    key={movie.imdbID}
                />
            ))}
        </ul>
    );
};

export default MovieList;
