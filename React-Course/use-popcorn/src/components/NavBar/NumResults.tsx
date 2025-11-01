import type { MovieType } from '../Main/MovieList/Movie';

interface NumResultsProp {
    movies: MovieType[];
}

const NumResults = ({ movies }: NumResultsProp) => {
    return (
        <p className="num-results">
            Found <strong>{movies ? movies.length : 0}</strong> results
        </p>
    );
};

export default NumResults;
